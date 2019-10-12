//uses ../database/index.js

var connection = require('../database/connect.js'

module.exports = {
  ikea_products:{
    get: function(callback) {
      var queryStr = 'SELECT * FROM products';
      connect.query(queryStr, (err, res) => {
        callback(err, res);
      });
    }
  };
};