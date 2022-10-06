const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

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

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = "https://us14.api.mailchimp.com/3.0/lists/3b92e106f5";

    const options = {
        method: "POST",
        auth: "AryanK1511:e2c49bbacf85a49168770e3d88287a2d-us14"
    }

    // HTTP Request
    const request = https.request(url, options, function(response) {
        if (response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        }
        else {
            res.sendFile(__dirname + "/failure.html");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res) {
    res.redirect("/");
})

// process.env.PORT helps hosting platform to choose the port by itself
// It is a dynamic port
// But this doesnt run locally. So we add an or statement
app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000.");
})

// API Key : e2c49bbacf85a49168770e3d88287a2d-us14
// List ID: 3b92e106f5