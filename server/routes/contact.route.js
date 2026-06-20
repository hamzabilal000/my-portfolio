const express = require("express")
const nodemailer = require("nodemailer")
const { Contact } = require("../models/contact.model")

let c_router = express.Router()

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})

async function sendEmail(name, email, subject, message) {
    let mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Portfolio Contact: ${subject || 'New Message'} — from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
                <h2 style="color: #22c55e; margin-bottom: 24px;">📬 New Portfolio Message</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; color: #666; width: 100px;"><strong>Name</strong></td>
                        <td style="padding: 10px 0; color: #111;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; color: #666;"><strong>Email</strong></td>
                        <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #22c55e;">${email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; color: #666;"><strong>Subject</strong></td>
                        <td style="padding: 10px 0; color: #111;">${subject || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; color: #666; vertical-align: top;"><strong>Message</strong></td>
                        <td style="padding: 10px 0; color: #111; white-space: pre-wrap; line-height: 1.7;">${message}</td>
                    </tr>
                </table>
                <p style="margin-top: 24px; color: #999; font-size: 12px;">Sent from your portfolio contact form</p>
            </div>
        `
    }

    try {
        await transporter.sendMail(mailOptions)
    } catch (err) {
        console.log("Email send failed:", err.message)
    }
}

c_router.get("/test", (req, res) => {
    res.json({ success: true, message: "Contact API Running" })
})

c_router.post("/send", async (req, res) => {
    try {
        let { name, email, subject, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: "All fields are required" })
        }

        let dbres = await Contact.insertOne({ name, email, subject, message })

        sendEmail(name, email, subject, message)

        res.status(201).json({ success: true, data: dbres })
    } catch (error) {
        console.log(error)
        res.json({ success: false, error: error.message, code: error.code })
    }
})

module.exports = { c_router }
