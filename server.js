var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/home', function (req, res) {
  res.send('hello')
});


app.listen(3000);
