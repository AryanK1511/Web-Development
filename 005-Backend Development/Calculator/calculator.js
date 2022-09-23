const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// urlencoded is used when you want to get data from a form
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("The result of the calculation is " + result);
})

app.listen(port, function() {
    console.log(`Server started at port ${port}`);
})