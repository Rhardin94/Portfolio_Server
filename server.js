//Dependencies
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500;
const path = require("path");
const CONTACT_ADDRESS = "emperor1194@gmail.com";
const mailer = require("nodemailer").createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSWORD,
  }
});
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//Routing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));  
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});
app.post("/contact", (req, res) => {
  mailer.sendMail({
    from: req.body.Email,
    to: [CONTACT_ADDRESS],
    subject: "Portfolio Contact",
    html: req.body.Message || "[No Message]",
  }, (err, info) => {
    if (err) return res.status(500).send(err);
    res.json({success:true});
    });
});
//Listener
app.listen(PORT, function () {
  console.log("Localhost listening on PORT:" + PORT);
});