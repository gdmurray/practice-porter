import { sheetsServiceAccount } from "./crypto";
// eslint-disable-next-line camelcase
import { sheets_v4 } from "googleapis";

const { google } = require("googleapis");

// eslint-disable-next-line camelcase
export async function getSheetsClient(): Promise<sheets_v4.Sheets> {
    try {
        const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
        const jwt = new google.auth.JWT(
            sheetsServiceAccount.client_email,
            undefined,
            sheetsServiceAccount.private_key.replace(/\\n/g, "\n"),
            scopes,
        );

        const sheets = google.sheets({ version: "v4", auth: jwt });
        return Promise.resolve(sheets);
    } catch (err) {
        return Promise.reject(err);
    }
}

// eslint-disable-next-line camelcase
export async function appendSignupToSheet(client: sheets_v4.Sheets, data) {
    await client.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: "Signups!A1",
        valueInputOption: "USER_ENTERED",
        resource: { values: [Object.values(data)] },
    });
}
