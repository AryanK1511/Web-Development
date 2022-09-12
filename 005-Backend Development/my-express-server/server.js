const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
})

app.get('/contact', function(req, res) {
    res.send('Contact me at aryan@gmail.com');
})

app.get('/about', function(req, res) {
    res.send('I am Aryan Khurana and I love to code');
})

app.get('/hobbies', function(req, res) {
    res.send('<ul><li>Computer Science</li><li>Music</li><li>Sports</li><li>Books</li></ul>');
})

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
})