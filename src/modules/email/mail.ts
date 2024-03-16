import nodemailer, { Transporter } from "nodemailer";
import { google } from "googleapis";
import { readFile } from "fs/promises";
import path from "path";
// TODO: FIX LIB LOADING ISSUE
import Handlebars from "handlebars";
import { minify } from "html-minifier";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { AuthenticationTypeOAuth2 } from "nodemailer/lib/smtp-connection";
import { htmlToText } from "html-to-text";

const CLIENT_ID = process.env.GMAIL_CLIENT_ID;
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN;
const USER_EMAIL = process.env.GMAIL_USER_EMAIL;

const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    CLIENT_ID, // Client ID from Google Cloud Console
    CLIENT_SECRET, // Client Secret from Google Cloud Console
    "https://developers.google.com/oauthplayground", // Redirect URL (not actively used here but required by library)
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN,
});

const emailConfig = {
    demoRegistration: {
        path: "demo-registration.html",
        subject: "User Signed up for Demo",
    },
    registrationConfirmation: {
        path: "registration-confirmation.html",
        subject: "Practice Porter - Demo Registration Confirmation",
    },
};

type Email = {
    name: string;
    recipient: string;
    data: any;
};

export async function sendEmail(emails: Email[]) {
    let transporter: Transporter<SMTPTransport.SentMessageInfo>;
    try {
        const accessTokenInfo = await oauth2Client.getAccessToken();
        const authConfig: AuthenticationTypeOAuth2 = {
            type: "OAuth2",
            user: USER_EMAIL,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            accessToken: accessTokenInfo.token ?? undefined,
        };

        transporter = nodemailer.createTransport({
            service: "gmail",
            auth: authConfig,
        });
    } catch (err) {
        console.error("Error Authenticating/Creating Transporter: ", err);
        throw err;
    }

    const emailOptions = [];
    for (const email of emails) {
        const { data, recipient, name } = email;

        let emailInfo: { path: string; subject: string };

        try {
            emailInfo = emailConfig[name];
        } catch (err) {
            console.error("Could not get email info for: ", email, err);
            throw err;
        }

        try {
            const templatePath =
                process.env.NODE_ENV.toUpperCase() === "PRODUCTION"
                    ? path.join(__dirname, "..", "email", emailInfo.path)
                    : path.join("src/modules/email", emailInfo.path);

            const htmlContent = await readFile(templatePath, "utf8");

            // Compile template with Handlebars
            const template = Handlebars.compile(htmlContent);
            const templatedContent = template(data);

            // Minify HTML content
            const minifiedContent = minify(templatedContent, {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                // other options
            });

            const mailOptions = {
                from: `Practice Porter <${USER_EMAIL}>`,
                to: recipient,
                subject: emailInfo.subject,
                html: minifiedContent,
                text: htmlToText(htmlContent, {
                    // Options for conversion
                    wordwrap: 130,
                }),
            };
            emailOptions.push(mailOptions);
        } catch (err) {
            console.error("Error Generating Email Template: ", err);
        }
    }

    for (const mailOptions of emailOptions) {
        try {
            const result = await transporter.sendMail(mailOptions);
            console.log("Email Sent: ", result);
        } catch (err) {
            console.error("Error Sending Email: ", err);
        }
    }
}
