// connection between server and the model
const model = require('./model.js');

module.exports = {
  ikea_products: {
    get: function(req, res) {
      model.get((err, results) => {
        console.log('got response');
        res.json(results);
      })
    }
  }
};