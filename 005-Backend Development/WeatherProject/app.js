const express = require("express");
const https = require("https");
const app = express();

app.get("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=17bfc9a8e13796f5eb3fff46ede4db9e";
    https.get(url, function(response) {
        // console.log(response);
        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            // Opposite of parse: JSON.stringify(object);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            response.write("<h2>" + weatherDescription + "</h2>")
            response.write("<h1>Temperature in London is " + temp + "degree Kelvin.</h1>");
            response.send();
        })
    });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000.");
})