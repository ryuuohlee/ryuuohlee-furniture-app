// server that connects client and database

//requirements
const express = require('express');
const bodyParser = require('body-parser');
var db = require('../database/connect.js');
const controller = require('./controller.js');

var app = express();
var port = 9000; //lol if you get this we are  buds

//Middleware
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  controller.ikea_products.get(req, res, (err, data) => {
    if (err) {
      return console.log('error connecting to server');
    }
    console.log('ikea_products connected');
    res.send(data).status(200);
  });
});

//check if app is listening
app.listen(port, () => {console.log(`listening on ${port}`)});

module.exports.app = app;