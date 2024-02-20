import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import {
    appendSignupToSheet,
    checkEmailExists,
    getSheetsClient,
    updateRowInSheet,
} from "../modules/sheets";
import { sendEmail } from "../modules/email/mail";

dayjs.extend(LocalizedFormat);

require("encoding");

interface SignupFormInput {
    email: string;
    practice: string;
    name: string;
    patients: string;
}

export default async function joinMailingListHandler(
    req: GatsbyFunctionRequest<SignupFormInput>,
    res: GatsbyFunctionResponse,
) {
    // todo: input validation
    let emailSheetAddress = null;
    try {
        const client = await getSheetsClient();
        emailSheetAddress = await checkEmailExists(client, req.body.email);
        // if (emailSheetAddress != null && emailSheetAddress === "Not Found") {
        //     await appendSignupToSheet(client, req.body);
        // }
        if (emailSheetAddress != null && emailSheetAddress !== "A1") {
            console.log("Updating Row In Sheet: ", emailSheetAddress);
            await updateRowInSheet(client, req.body, emailSheetAddress);
        } else {
            console.log("Appending Row in Sheet: ", req.body.email);
            await appendSignupToSheet(client, req.body);
        }
        // if (!emailExists) {
        //     await appendSignupToSheet(client, req.body);
        // } else {
        // }
    } catch (err) {
        console.error("Error Writing signup: ", err);
        return res
            .status(500)
            .json({ status: "Error", message: "Error Signing Up" });
    }

    if (emailSheetAddress == null) {
        try {
            await sendEmail([
                {
                    name: "registrationConfirmation",
                    recipient: req.body.email,
                    data: {
                        userName: req.body.name,
                        year: new Date().getFullYear(),
                        contactEmail: req.body.email,
                    },
                },
                {
                    name: "demoRegistration",
                    recipient: "info@practiceporter.ca",
                    data: {
                        userName: req.body.name,
                        userEmail: req.body.email,
                        userPractice: req.body.practice,
                        userPatients: req.body.patients,
                        year: new Date().getFullYear(),
                        signupDate: dayjs().format("L LT"),
                        spreadsheetUrl: `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEETS_SPREADSHEET_ID}`,
                    },
                },
            ]);
        } catch (err) {
            console.error("Error Sending Emails: ", err);
        }
    }

    return res.status(200).json({ status: "Success" });
}
