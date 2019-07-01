//Dependencies
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500;
const path = require("path");
const CONTACT_ADDRESS = "rob.j.hardin@gmail.com";
const mailer = require("nodemailer").createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_ADDRESS,
    pass: process.env.GMAIL_PASS
  }
});
// console.log(process.env.GMAIL_ADDRESS);
// console.log(process.env.GMAIL_PASS);
//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//Routing
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.post("/contact", (req, res) => {
  //CORS solution found here: https://stackoverflow.com/questions/47523265/jquery-ajax-no-access-control-allow-origin-header-is-present-on-the-requested/47525511
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  mailer.sendMail({
    from: req.body.Email,
    to: [CONTACT_ADDRESS],
    subject: "Nodemailer test",
    text: `From: ${req.body.Email}` + "\n" + `Message:  ${req.body.Message}` || "[No Message]",
  }, (err, info) => {
    if (err) return res.status(500).end();
    res.send(200).end();
    console.log(info);
    });
});
//Listener
app.listen(PORT, function () {
  console.log("server listening on PORT:" + PORT);
});