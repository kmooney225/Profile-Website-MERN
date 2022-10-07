const express = require("express");
const app = express();
const port = 5000;

//env var

require("dotenv").config();

const bodyParser = require("express").json;
app.use(bodyParser());

//nodemailer config

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
})

//nodemailer test
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else{
        console.log("Ready for messages")
        console.log(success);
    }
})

app.post("/sendmail", (req, res) => {
    const {to, subject, message} = req.body;

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: to,
        subject: subject,
        text: message
    }

    transporter
        .sendMail(mailOptions)
        .then(() => {
            //success
            res.json ({
                status: "SUCCESS",
                message: "Message sent successfully."
            })
        })
        .catch((error) => {
            //error
            console.log(error)
            res.json({status: "FAIL", message: "An error occurred!"})
        })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})