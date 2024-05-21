import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { iex } from "./config/iex.js";
import "../../../public/Screener.css";

const changeStyle = {
  color: "#4caf50",
  fontSize: "0.8rem",
  marginLeft: 5
};

export const StockRow = ({ tickers }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseDataArray = [];
        for (const ticker of tickers) {
          const url = `${iex.base_url}/intraday_prices/${ticker.toLowerCase()}?range=1d&token=${iex.api_token}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const responseData = await response.json();
          console.log("Response data:", responseData);
          if (responseData && responseData.length > 0) {
            const latestData = responseData[0];
            console.log("Latest data for", ticker, ":", latestData);
            let closeValue = latestData.close;
            if (closeValue === null) {
              closeValue = (Math.random() * (410 - 400) + 400).toFixed(2);
            }
            const randomFloat = (Math.random() * 10).toFixed(3);
            const randomPercentage = (Math.random() * 10).toFixed(1);

            // Randomly generate "+" or "-" sign
            const randomSign = Math.random() < 0.5 ? "-" : "+";
            const randomFloatWithSign = `${randomSign}${randomFloat}`;
            const randomPercentageWithSign = `${randomSign}${randomPercentage}%`;

            // Determine color based on sign
            const color = randomSign === "-" ? "#F63538" : "#30CC5A";

            responseDataArray.push({
              ticker,
              closeValue: parseFloat(closeValue), // Parse as float for proper sorting
              randomChange: <span style={{ color }}>{randomFloatWithSign} ({randomPercentageWithSign})</span>,
              date: latestData.date,
              label: latestData.label
            });
          } else {
            console.error('No data found in the response for', ticker);
          }
        }
        setData(responseDataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [tickers]);

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        fontSize: '14px',
      },
    },
    table: {
      style: {
        borderRadius: '0.375rem', // Rounded corners for the entire table
      },
    },
  };

  const columns = [
    {
      name: 'Ticker',
      selector: row => row.ticker,
      sortable: true
    },
    {
      name: 'Price',
      selector: row => row.closeValue,
      sortable: true
    },
    {
      name: 'Change',
      selector: row => row.randomChange,
      sortable: true
    },
    {
      name: 'Time',
      selector: row => row.label,
      sortable: true
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true
    }
  ];

  return (
    <div className="ticker-main">
      <div className="container ticker-main-child">
        <div className="col-md-5 mt-5">
          <DataTable
            title="Stocks"
            columns={columns}
            data={data}
            pagination
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default StockRow;
