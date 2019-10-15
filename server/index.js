// server that connects client and database

//requirements
const express = require('express');
const bodyParser = require('body-parser');
var db = require('../database/connect.js');
//const controller

var app = express();
var port = 9000; //lol if you get this we are  buds

//Middleware
app.use(bodyParser.json());


//check if app is listening
app.listen(port, () => {console.log(`listening on ${port}`)});