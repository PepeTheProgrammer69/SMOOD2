import Papa from 'papaparse';
import fs from 'fs/promises';

(async () => {
  try {
    // Read the CSV file
    const csvData = await fs.readFile('../data.csv', 'utf8');

    // Parse CSV data using PapaParse
    const parsedData = Papa.parse(csvData, { header: true }).data;

    // Sort parsed data by date
    parsedData.sort((a, b) => new Date(a.Date) - new Date(b.Date));

    // Assign IDs based on date values
    const jsonData = parsedData.map((item, index) => ({
      ...item,
      ID: index + 1,
    }));

    // Write JSON data to a file
    await fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), 'utf8');

    console.log('Conversion completed!');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();
