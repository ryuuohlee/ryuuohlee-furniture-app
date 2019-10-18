//uses ../database/index.js to connect to the mysql database

var connection = require('../database/connect.js');

module.exports = {
  ikea_products:{
    //get request to get all product records in the database
    get: function(req, callback) {
      var queryStr = 'SELECT * FROM products WHERE product_name is ?';
      connection.query(queryStr, req.body.product_name, (err, res) => {
        callback(err, res);
      });
    }
  }
};