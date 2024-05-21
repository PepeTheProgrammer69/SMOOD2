// import iex from "./config/iex.js"
//
// export const Stock_Screener = () => {
//
//   const latestPrice = (ticker) => {
//     const fetchLatestData = async () => {
//       try {
//         const url = `${iex.base_url}/intraday_prices/${ticker.toLowerCase()}?range=today&token=${iex.api_token}`; // Use props.ticker to fetch data for each specific ticker
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const responseData = await response.json();
//         const latestData = responseData[0];
//         setData(latestData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//
//     fetchLatestData();
//   }
//
//   return (
//   );
// };