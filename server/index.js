// server that connects client and database
require('dotenv').config();
// requirements
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('./controller.js');

const app = express();
const port = process.env.PORT || 3000; // lol if you get this we are buds

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('client/dist'));

app.get('/api/products', (req, res) => {
  controller.ikea_products.get(req, res, (err, data) => {
    if (err) {
      console.log('error connecting to server');
      return;
    }
    console.log('ikea_products connected');
    res.send(data).status(200);
  });
});

// check if app is listening
app.listen(port, () => { console.log(`listening on ${port}`); });

module.exports.app = app;
