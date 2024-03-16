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
    const keyOrder = ["email", "practice", "name", "patients"];
    await client.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range: "Signups!A1",
        valueInputOption: "USER_ENTERED",
        resource: { values: [keyOrder.map((key) => data[key])] },
    });
}

export async function updateRowInSheet(
    // eslint-disable-next-line camelcase
    client: sheets_v4.Sheets,
    data: any,
    address: string,
) {
    const columnNumber = address.replace(/\D/g, "");
    const range = `${address}:D${columnNumber}`;
    console.log("Range: ", range);
    const keyOrder = ["email", "practice", "name", "patients"];
    await client.spreadsheets.values.update({
        spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [keyOrder.map((key) => data[key])] },
    });
}

export async function checkEmailExists(
    // eslint-disable-next-line camelcase
    client: sheets_v4.Sheets,
    email: string,
): Promise<string | null> {
    const emailCheckCell = "Signups!G1";
    const columnSearchRange = "A1:A";
    const formula = `=IFERROR(ADDRESS(MATCH("${email}", ${columnSearchRange}, 0), 1, 4), "Not Found")`;

    try {
        // Set a formula in a temporary cell that uses MATCH to find the value
        await client.spreadsheets.values.update({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            range: emailCheckCell,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values: [[formula]],
            },
        });

        // Read the result of the MATCH function from the temporary cell
        const result = await client.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
            range: emailCheckCell,
        });

        // // Clear the temporary cell after checking
        // await client.spreadsheets.values.clear({
        //     spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
        //     range: emailCheckCell,
        // });

        if (result.data.values) {
            return result.data.values[0][0] !== "Not Found"
                ? result.data.values[0][0]
                : null;
        }
        return null;
    } catch (error) {
        console.error("The API returned an error: " + error);
        return null;
    }
}
