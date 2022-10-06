const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=17bfc9a8e13796f5eb3fff46ede4db9e&units=metric";

    // Using the https module
    https.get(url, function(response) {
        // console.log('statusCode:', response.statusCode);
        // console.log('headers:', response.headers);
        response.on('data', (d) => {
            // JSON.stringify is the opposite of JSON.parse
            const weatherData = JSON.parse(d);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            
            // res.write() doesnt display html without this line
            res.set("Content-Type", "text/html");
            res.write("<p>The weather is currently " + weatherDescription + "</p>");
            res.write("<h1>The temperature in London is " + temp + " degrees Celcius.</h1>");
            res.write("<img src='" + imageURL + "'>");
            res.end();
        })
    })
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})