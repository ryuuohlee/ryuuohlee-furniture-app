//Database connection
require('dotenv').config();
const mysql = require('mysql');
const randProdList = require('mysql');


//connection details
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'ikea_products'
});

connection.connect(function(err){
  //use err first callback patter to test connection
  if(err){
    return console.log('Error connecting to database.', err);
  }
  console.log('Ikea details Connected');
});


module.exports = connection;