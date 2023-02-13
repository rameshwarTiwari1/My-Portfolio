const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(express.json());

// Route for sending emails
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;
  console.log(req.body, "body");
  console.log(req.body.email, "email");

  // Configure nodemailer transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_MAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  // Define email options
  let mailOptions = {
    from: process.env.AUTH_MAIL,
    to: email,
    subject: "New Message from Contact Form",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Message sent: %s", info.messageId);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
