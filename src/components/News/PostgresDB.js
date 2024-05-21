import pg from 'pg';
import fs from 'fs/promises';

const { Pool } = pg;

const pool = new Pool({
  user: 'postgres.mlelytyghqgzaunwuwnp',
  host: 'aws-0-us-west-1.pooler.supabase.com',
  database: 'postgres',
  password: 'SMOODCUSIT@',
  port: 5432,
  ssl: {
    rejectUnauthorized: false // For self-signed SSL certificates
  }
});

async function fetchDataAndWriteToFile() {
  const client = await pool.connect();
  try {
    const result = await client.query('SELECT * FROM headlines');
    const data = result.rows;

    // Iterate over each object and create a unique key
    const newData = data.map(item => {
      const uniqueKey = `${item.ticker}_${item.headline}_${item.publication_timestamp}`;
      return { ...item, unique_key: uniqueKey };
    });

    // Write data to file
    await fs.writeFile('data.json', JSON.stringify(newData, null, 2));

    return newData; // Return data with unique keys
  } finally {
    client.release();
  }
}

fetchDataAndWriteToFile()
  .then(data => {
    console.log('Fetched data with unique keys:', data);
    console.log('Data with unique keys written to file successfully.');
  })
  .catch(error => console.error('Error fetching data and writing to file:', error));
