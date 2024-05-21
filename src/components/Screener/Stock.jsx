import {iex} from "./config/iex.js"

export const Stock = {
  latestPrice: (ticker, callback) => {
    fetch(Stock.latestPriceURL(ticker)).then((response) => response.json()).then((data) => callback(Stock.formatPriceData(data)))
  },

  latestPriceURL: (ticker) => {
    return `${iex.base_url}/intraday_prices/${ticker.toLowerCase()}?range=today&token=${iex.api_token}`
  },

  formatPriceData: (data) => {
    const stockData = data[data.length - 1]
    const formattedData = {}
    formattedData.price = stockData.close
    formattedData.date = stockData.date
    formattedData.time = stockData.label
    return formattedData
  },

  getYesterdayClose: (ticker, date, callback) => {
    fetch(Stock.yesterdayCloseURL(ticker, date)).then((response) => response.json()).then((data) => callback(Stock.formatPriceData(data)))
  },

  yesterdayCloseURL: (ticker, date) => {
    return `${iex.base_url}/intraday_prices/${ticker.toLowerCase()}?date=${data}&token=${iex.api_token}`
  }

};