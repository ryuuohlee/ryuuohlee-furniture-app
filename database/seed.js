// require dummy data
// require access to database
let randProdList = require('./dummyData.js');
let db = require('./connect.js');

// function to seed(insert) dataset
let seedData = function (quantity) {
  // create an array of product list

  let prodList = randProdList(quantity);
  let queryStr = 'INSERT INTO products (product_id, product_category, product_name, product_short_desc, product_ad_desc, product_price, product_color_image, product_color, product_age, product_avg_rev) VALUES ?';
  console.log(prodList);
  db.query(queryStr, [prodList], (error, results) => {
    if (error) {
      console.log('Failed to seed: ', error);
    } else {
      console.log('success: ', results);
    }
  });
};

seedData(100);
