import upArrow from '../assets/img/up-arrow.png';
import downArrow from '../assets/img/down-arrow.png';

export default {
  table_container: {
    width: '90%',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  table_head: {
    backgroundColor: '#f2f2f2',
    padding: '8px',
    border: '1px solid #dddddd',
    textAlign: 'left',
  },
  table_body: {
    marginTop: '16px',
  },
  table_row: {
    border: '1px solid #dddddd',
    padding: '8px',
    backgroundColor: 'white',
    '&:nth-child(even)': {
      backgroundColor: '#f2f2f2',
    },
    '&:hover': {
      backgroundColor: '#e6e6e6',
    },
  },
  table_cell: {
    padding: '8px',
    border: '1px solid #dddddd',
    textAlign: 'left',
  },
  table_size: {
    background: 'none',
    border: 'none',
    padding: 0,
  },
  table_size_dropdown: {
    width: '70px',
    flex: 'none',
    margin: '0px 10px',
    display: 'inline-block',
    float: 'none',
  },
  table_filter: {
    display: 'inline-block',
    verticalAlign: 'top',
    marginRight: '5px',
    width: '250px',
  },
  table_tool: {
    display: 'inline-block',
    verticalAlign: 'top',
  },
  table_tool_btn: {
    marginRight: '5px',
  },
  sort_asc: {
    backgroundImage: `url(${upArrow})`,
  },
  sort_desc: {
    backgroundImage: `url(${downArrow})`,
  },
};
