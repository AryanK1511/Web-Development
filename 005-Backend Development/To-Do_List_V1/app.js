const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

   var today = new Date();
   var currentDay = today.getDay();
   var day = "";

   if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    res.render('list', {kindOfDay: day});
   }
   else {
    day = "Weekday";
    res.render('list', {kindOfDay: day});
   }
});

app.listen(3000, function() {
    console.log("Server started at port 3000.");
})