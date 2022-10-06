const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

// We have to use this function to tell express which folder we are going to use in order to serve static files to the server
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;

    console.log(firstname + lastname + email);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})