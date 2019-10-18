// connection between server and the model for the client to send the get request
const model = require('./model.js');
const connection = require('../database/connect.js');

module.exports = {
  ikea_products: {
    get: function(req, res) {
      model.ikea_products.get(req, (err, results) => {
        console.log('got response');
        res.json(results);
      })
    }
  }
};