//the dummy data to feed into the seed

const randomData = require('faker');

//create a random number generator function
var random = function(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

//create random records
  // structure the record into an object
var ProductRecord = function() {
  this.category = 'Living Room';
  this.name = 'FRIHETEN';
  this.shortDesc = randomData.lorem.sentence();
  this.adDesc = randomData.lorem.sentence();
  this.price = randomData.commerce.price();
  this.color_image = ['https://fec-piccolo.s3-us-west-1.amazonaws.com/hyllie+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/hyllie+beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/bomstad+black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/skiftebo+blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/skiftebo+dark+gray.webp'];
  this.color = ['Hyllie dark gray', 'Hyllie beige', 'Bomstad black', 'Skiftebo blue', 'Skiftebo dark gray'];
  this.age = randomData.date.recent().toString().substring(0,10);
  this.review = random(6);
  this.data = [];
};

//creates a random list of products
var randProdList = function(itemCount) {
  var prodList = [];
  for (var i = 0; i < itemCount; i++) {
    var product = new ProductRecord;

    var cat = product.category;
    var nm = product.name;
    var sd = product.shortDesc;
    var ad = product.adDesc;
    var amount = product.price;
    var design = product.color_image[i];
    var color = product.color[i];
    var bd = product.age;
    var likes = product.review;

    prodList.push([cat, nm, sd, ad, amount, design, color, bd, likes]);
  }
  return prodList;
}

console.log(randProdList(4));

module.exports = randProdList;