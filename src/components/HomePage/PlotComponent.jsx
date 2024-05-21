import React, { useEffect, useState } from 'react';

const PlotComponent = () => {
  const [plotUrl, setPlotUrl] = useState('');

  useEffect(() => {
    const fetchAndPlotData = async () => {
      // Ensure Pyodide is loaded
      if (!window.languagePluginUrl) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js';
        script.async = true;
        script.onload = () => {
          initializePyodide();
        };
        document.body.appendChild(script);
      } else {
        initializePyodide();
      }
    };

    const initializePyodide = async () => {
      // Ensure Pyodide is ready
      if (!window.pyodide) {
        await languagePluginLoader;
      }

      // Now Pyodide is ready to use
      const pyodide = window.pyodide;

      // Load micropip module
      await pyodide.loadPackage('micropip');
      const micropip = pyodide.pyimport('micropip');

      // Install required Python packages
      await micropip.install('pandas-datareader');
      await micropip.install('matplotlib');

      // Write Python code to fetch data and plot
      const pythonCode = `
        import pandas_datareader.data as pdr
        from datetime import datetime, timedelta
        import matplotlib.pyplot as plt

        today = datetime.today()
        start_date = today - timedelta(days=365*40)
        end_date = today
        spx_index = pdr.get_data_stooq('^SPX', start_date, end_date)

        plt.figure()
        spx_index['Close'].plot(title='1 year price history for index S&P500')
        plt.xlabel('Date')
        plt.ylabel('Price (USD)')

        import io, base64
        img = io.BytesIO()
        plt.savefig(img, format='png')
        img.seek(0)
        plot_url = base64.b64encode(img.getvalue()).decode()
      `;

      // Execute Python code
      await pyodide.runPythonAsync(pythonCode);

      // Get the plot URL from Python code
      const plotUrl = pyodide.globals.plot_url;
      setPlotUrl('data:image/png;base64,' + plotUrl);
    };

    // Call the function to fetch and plot data
    fetchAndPlotData();
  }, []);

  return (
    <div>
      <h1>Plot Display</h1>
      <img src={plotUrl} alt="Plot" />
    </div>
  );
};

export default PlotComponent;
