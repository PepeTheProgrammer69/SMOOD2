import React from 'react';
import DataTable from 'react-data-table-component';

const StockTable = ({ data }) => {
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
          />
        </div>
      </div>
    </div>
  );
};

export default StockTable;
