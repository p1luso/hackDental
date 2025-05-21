import { createClient } from '@supabase/supabase-js';
import { google } from 'googleapis';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_APP_SUPABASE_URL,
  process.env.VITE_APP_SUPABASE_ANON_KEY
);

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const CREDENTIALS = JSON.parse(fs.readFileSync('./credentials.json', 'utf-8'));

export const exportToSheets = async () => {
  const jwtClient = new google.auth.JWT(
    CREDENTIALS.client_email,
    null,
    CREDENTIALS.private_key,
    SCOPES
  );

  await jwtClient.authorize();
  const sheets = google.sheets({ version: 'v4', auth: jwtClient });

  const { data, error } = await supabase.from('Hackdental').select('*');
  if (error) throw error;

  if (!data || data.length === 0) {
    console.log('No hay datos para exportar.');
    return;
  }

  const headers = Object.keys(data[0]);
  const rows = data.map((row) => headers.map((h) => row[h]));

  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: 'A1',
    valueInputOption: 'RAW',
    requestBody: {
      values: [headers, ...rows],
    },
  });

  console.log('Exportación completada.');
};
