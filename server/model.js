//uses ../database/index.js to connect to the mysql database

var connection = require('../database/connect.js');

module.exports = {
  ikea_products:{
    //get request to get all product records in the database
    get: function(callback) {
      var queryStr = 'SELECT * FROM products';
      connection.query(queryStr,  (err, res) => {
        callback(err, res);
      });
    }
  }
};