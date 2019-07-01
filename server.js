//Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500;
const path = require("path");
const CONTACT_ADDRESS = process.env.RECEIVING_ADDRESS;
const mailer = require("nodemailer").createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASS
  }
});
console.log(process.env.GMAIL_ADDRESS);
console.log(process.env.GMAIL_PASS);
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));  
//Routing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.post("/contact", (req, res) => {
  mailer.sendMail({
    from: req.body.email,
    to: CONTACT_ADDRESS,
    subject: req.body.subject || "[No Subject]",
    text: "From: " + req.body.email + " Message: " + req.body.message || "[No Message]",
    html: "From: " + req.body.email + "<br>" + " Message: " + req.body.message || "[No Message]",
  }, (err, info) => {
    if (err) return res.status(500).end();
    res.status(200).end();
    console.log(info);
    });
});
//Listener
app.listen(PORT, function () {
  console.log("Listening on PORT:" + PORT);
});