const { Client } = require('pg');
const fs = require('fs');

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
      const jsonData = JSON.stringify(res.rows);
      fs.writeFile('stocksData.json', jsonData, (err) => {
        if (err) {
          console.error('Error writing JSON file:', err);
        } else {
          console.log('JSON file saved successfully.');
        }
        client.end();
      });
    } else {
      console.error('Error querying database:', err.message);
      client.end();
    }
  });
