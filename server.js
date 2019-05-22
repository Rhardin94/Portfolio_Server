//Dependencies
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500;
const path = require("path");
//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));
//Routing
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})
//Listener
app.listen(PORT, function() {
    console.log('Localhost listening on PORT:' + PORT);
})