const fs = require('fs');
const { Client } = require('pg');

const client = new Client({
  host: "aws-0-us-west-1.pooler.supabase.com",
  user: "postgres.mlelytyghqgzaunwuwnp",
  port: 5432,
  password: "SMOODCUSIT@",
  database: "postgres"
});

client.connect();

client.query('SELECT * FROM stocks', (err, res) => {
  if (!err) {
    const data = res.rows.map(row => ({
      ticker: row.ticker,
      stock_name: row.stock_name,
      daily_sentiment: row.daily_sentiment,
      weekly_sentiment: row.weekly_sentiment,
      monthly_sentiment: row.monthly_sentiment
    }));
    // Write data to JS_obj.js
    fs.writeFileSync('JS_obj.js', `module.exports = ${JSON.stringify(data, null, 2)};`);
    console.log('Data has been written to JS_obj.js');
  } else {
    console.error(err.message);
  }
});
