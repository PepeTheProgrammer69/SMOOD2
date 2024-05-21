import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { LineChartData } from "./Fake_Data/Fake_Data.js";
// import {optionsData} from "./Fake_Data/options.js";

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

export const LineGraph = () => {
  const options = {
    tooltip: {
      mode: 'index'
    },
    animations: {
      tension: {
        duration: 5000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 10000
      }
    }
  }

  return <Line options={options} data={LineChartData} />
};