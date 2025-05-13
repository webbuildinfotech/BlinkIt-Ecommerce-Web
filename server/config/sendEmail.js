import { Resend } from 'resend';
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config()

if (!process.env.RESEND_API) {
    console.log("Provide RESEND_API in side the .env file")
}

const resend = new Resend(process.env.RESEND_API);





// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service provider here
    auth: {
        user: process.env.NODEMAILER_USER, // Your email address
        pass: process.env.NODEMAILER_PASS, // Your password
    },
});

const sendEmail = async ({ sendTo, subject, html }) => {
    try {
        // Send registration email logic
        await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: sendTo,
            subject: subject,
            html: html,
        });
    } catch (error) {
        console.error("Error sending registration email:", error);
        throw error;
    }
};


export default sendEmail

