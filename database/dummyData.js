//the dummy data to feed into the seed

const randomData = require('faker');

//create a random number generator function
var random = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

//create random records
  // structure the record into an object
var ProductRecord = function() {
  this.categories = ['Bedroom', 'Living Room', 'Kitchen', 'Bathroom', 'Office', 'Dining Room'];
  this.name = randomData.name.firstName();
  this.shortDesc = randomData.lorem.sentence();
  this.adDesc = randomData.lorem.sentence();
  this.price = randomData.commerce.price();
  this.color = randomData.lorem.word();
  this.age = randomData.date.recent().toString().substring(0,10);
  this.review = random(5);
  this.data = [];
};

ProductRecord.prototype.category = function() {
  return this.categories[random(this.categories.length)];
}

//creates a random list of products
var randProdList = function(itemCount) {
  var prodList = [];
  for (var i = 0; i < itemCount; i++) {
    var product = new ProductRecord;

    var cat = product.category();
    var nm = product.name;
    var sd = product.shortDesc;
    var ad = product.adDesc;
    var amount = product.price;
    var design = product.color;
    var bd = product.age;
    var likes = product.review;

    prodList.push([cat, nm, sd, ad, amount, design, bd, likes]);
  }
  return prodList;
}

console.log(randProdList(10));

module.exports = randProdList;