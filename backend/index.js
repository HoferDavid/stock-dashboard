const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const axios = require('axios'); // For HTTP-Requests
const cron = require('node-cron');
const serviceAccount = require('./serviceAccountKey.json');

require('dotenv').config();

// Firebase initialize
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const app = express();
app.use(bodyParser.json());

// Google Spreadsheet ID and API Key
const spreadsheetId = process.env.SPREADSHEET_ID;
const apiKey = process.env.API_KEY;

// Function, to load Data from Google Spreadsheet
async function getStockOverviewData(sheetName, revenueRow, quarterRow) {
    
  const revenueRange = `${sheetName}!A${revenueRow}:Z${revenueRow}`;
  const quarterRange = `${sheetName}!A${quarterRow}:Z${quarterRow}`;
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values:batchGet?ranges=${revenueRange}&ranges=${quarterRange}&key=${apiKey}`;
  
  try {
    const response = await axios.get(url);
    return response.data.valueRanges;
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
  }
}

// Load Google Spreadsheet-Data in Firestore
async function syncSpreadsheetToFirestore() {
  try {
    console.log('Synchronisierung gestartet...');

    // Example for a Stock
    const sheetName = '$TSLA';
    const revenueRow = 13;
    const quarterRow = 3;

    const stockData = await getStockOverviewData(sheetName, revenueRow, quarterRow);
    
    // Save Data in Firestore
    const revenueData = stockData[0].values[0];
    const quarterData = stockData[1].values[0];
    
    const stockRef = firestore.collection('stocks').doc(sheetName);
    await stockRef.set({
      revenue: revenueData,
      quarter: quarterData
    });
    
    console.log('Daten erfolgreich in Firestore gespeichert.');
    
  } catch (error) {
    console.error('Fehler beim Laden der Daten:', error);
  }
}

// API-Route to manual Synchronisation
app.post('/api/sync', async (req, res) => {
  await syncSpreadsheetToFirestore();
  res.send('Spreadsheet synchronisiert.');
});

// Cronjob every 24 hours
cron.schedule('0 0 * * *', syncSpreadsheetToFirestore);

// Start Server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
