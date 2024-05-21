import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import '../../../public/NewsTable.css'; // CSS file for styling (create this file)
import data from './data.json'; // Assuming the file is in the same directory

function ExcelLikeTable() {
  const [tableData, setTableData] = useState(data);

  const getSentimentStyle = (sentiment) => {
    switch (sentiment) {
      case 'neutral':
        return { color: 'gold' };
      case 'positive':
        return { color: 'lime' };
      case 'negative':
        return { color: 'red' };
      default:
        return {};
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const customSort = (rowA, rowB) => {
    const sentimentOrder = {
      positive: 1,
      neutral: 2,
      negative: 3,
    };
    return sentimentOrder[rowA.sentiment] - sentimentOrder[rowB.sentiment];
  };

  const columns = [
    {
      name: 'Publication Timestamp',
      selector: (row) => row.publication_timestamp,
      sortable: true,
      width: 200,
    },
    {
      name: 'Ticker',
      selector: (row) => row.ticker,
      sortable: true,
    },
    {
      name: 'Headline',
      selector: (row) => row.headline,
      sortable: true,
      wrap: true, // Enable text wrapping for the headline column
      grow: 2,
    },
    {
      name: 'Sentiment',
      selector: (row) => row.sentiment,
      sortable: true,
      sortFunction: customSort, // Apply custom sort function
      cell: (row) => (
        <div style={getSentimentStyle(row.sentiment)}>
          {capitalizeFirstLetter(row.sentiment)}
        </div>
      ),
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: '#f2f2f2',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        border: '1px solid #dddddd',
        textAlign: 'left',
      },
    },
    rows: {
      style: {
        border: '1px solid #dddddd',
        backgroundColor: "#F5EFE6",
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        border: '1px solid #dddddd',
        textAlign: 'left',
      },
    },
  };

  return (
    <div className="table-container">
      <DataTable
        title="Market Sentiment"
        columns={columns}
        data={tableData}
        pagination
        paginationPerPage={100} // Set number of rows per page
        paginationRowsPerPageOptions={[10, 25, 50, 100]} // Optional: Control available options for rows per page
        customStyles={customStyles}
      />
    </div>
  );
}

export default ExcelLikeTable;
