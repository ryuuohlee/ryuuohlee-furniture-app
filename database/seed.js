//require dummy data
//require access to database
var randProdList = require('./dummyData.js');
var db = require('./connect.js');

//function to seed(insert) dataset
var seedData = function(quantity) {
  //create an array of product list

  var prodList = randProdList(100);
  var queryStr = 'INSERT INTO products (product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color, product_age, product_avg_rev) VALUES ?'
  console.log(prodList);
  db.query(queryStr, [prodList], (error, results) => {
    if (error) {
      console.log('Failed to seed: ', error);
    } else {
      console.log("success");
    }
  })
};

seedData(100);
