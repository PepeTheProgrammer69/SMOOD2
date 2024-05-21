import React from 'react';
import StockRow from "./StockRow.jsx";

import "../../../public/Screener.css"

export const Tickers = () => {
  const tickers = ['MSFT', 'AAPL', 'NVDA', 'AMZN', 'META', 'GOOGL', 'GOOG', 'BRK.B', 'LLY', 'JPM', 'AVGO', 'XOM', 'UNH', 'TSLA', 'V', 'PG', 'MA', 'JNJ', 'HD', 'MRK'];
  const randomChanges = tickers.map(() => (Math.random() * 10).toFixed(3));

  return <StockRow tickers={tickers} />;
};

//     "ATO", "T", "ADSK", "ADP", "AZO", "AVB", "AVY", "BHVN", "BKR", "BLL", "BAC", "BK", "BAX", "BDX", "BRK.B", "BBY",
//     "BLK", "HRB", "BWA", "BXP", "BSX", "BMY", "AVGO", "BRCM", "BR", "BF.B", "CHRW", "CHT", "CVX", "CMG", "CB", "CHD",
//     "CI", "CRL", "CTXS", "CLX", "CME", "CMS", "KO", "CTSH", "CL", "CMCSA", "CMA", "CAG", "COP", "ED", "STZ", "CE", "CNC",
//     "CNP", "CTL", "CERN", "CF", "SCHW", "CHTR", "CVS", "CSCO", "C", "CFG", "CTXN", "CLOV", "CLF", "CLNE", "CMD", "CMI", "C",
//     "CNO", "CDW", "COF", "CPB", "COO", "COST", "COTY", "CPRI", "CPS", "CRM", "CRLX", "CROX", "CRWD", "CRY", "CTAS", "CTS", "CTVA",
//     "CUBE", "CVNA", "CWT", "DHI", "DHR", "DRI", "DVA", "DE", "DAL", "XRAY", "DVN", "DXC", "DXCM", "EMN", "ETN", "EBAY", "ECL", "EIX",
//     "EW", "EMR", "ENPH", "ETFC", "EOG", "EOC", "EQIX", "EQR", "ESS", "EL", "ETSY", "EVRG", "ES", "RE", "EXC", "EXPE", "EXPD", "EXR", "XOM",
//     "FFIV", "FANG", "FB", "F", "FAST", "FRT", "FDS", "FDX", "FITB", "FIS", "FLT", "FE", "FMC", "FMS", "FTNT", "FTV", "FBHS", "FOXA", "FOX", "BEN",
//     "FCX", "GPS", "GRMN", "IT", "GD", "GE", "GIS", "GM", "GPC", "GILD", "GL", "GPN", "GPS", "GRUB", "GS", "GWW"

export default Tickers;
