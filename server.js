var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello World')
})

app.get('/page', function(req, res) {
  res.send('Hello other page')
})

// Final catch-all
// keep this last in line to act as 404
app.get('/*', function(req, res) {
  res.send('404')
})

app.listen(1337)