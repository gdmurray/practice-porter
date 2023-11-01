import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import { appendSignupToSheet, getSheetsClient } from "../modules/sheets";
require("encoding");

export default async function joinMailingListHandler(
    req: GatsbyFunctionRequest,
    res: GatsbyFunctionResponse,
) {
    // todo: input validation
    try {
        const client = await getSheetsClient();
        await appendSignupToSheet(client, req.body);
    } catch (err) {
        console.error("Error Writing signup: ", err);
        return res.status(500).json({ status: "Failure" });
    }

    return res.status(200).json({ status: "Success" });
}
