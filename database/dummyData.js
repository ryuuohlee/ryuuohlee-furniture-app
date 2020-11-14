// the dummy data to feed into the seed

const randomData = require('faker');

// create a random number generator function
let random = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

// create random records
// structure the record into an object
let ProductRecord = function () {
  this.category = 'Living Room';
  this.names = ['BALKARP', 'BRATHULT', 'DELAKTIG', 'EKEBOL', 'EKTORP', 'EKOLSUND', 'FARLOV', 'FLEKKE', 'FRIHETEN', 'FROSLOV', 'FYRESDAL', 'GENEVAD', 'GRONLID', 'HOLMSUND', 'KARLSTAD', 'KIVIK', 'KLIPPAN', 'KNISLINGE', 'KNOPPARP', 'LANDSKRONA',' LIDHULT', 'LINDOME', 'LYCKSELE LOVAS', 'NYHAMN', 'POANG', 'SANDBACKEN', 'SODERHAMN', 'STOCKHOLM', 'STRANDMON', 'TOMBACK', 'UTTRAN', 'VALLENTUNA', 'VANNAS', 'VARMER', 'VIMILE', 'YPPERLIG'];
  // this.type = ['sectional', 'sofa'];
  this.shortDesc = randomData.lorem.sentence();
  this.adDesc = randomData.lorem.sentence();
  this.price = randomData.commerce.price();
  this.color_images = ['https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BALKARP-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/BRATHULT-red.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-antracite.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-brown.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/DELAKTIG-white+black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/EKEBOL-white.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/EKOLSUND-brown.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/EKOLSUND-dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/EKTORP-beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/EKTORP-dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/EKTORP-white.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FARLOV-beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FARLOV-dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FARLOV-white.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FARLOV-yellow.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FLEKKE-black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-bomstad+black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-hyllie+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+blue.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FRIHETEN-skiftebo+dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FROSLOV-beige.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FROSLOV-dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/FYRESDAL-black.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/GENEVAD-brown.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/GRONLID-dark+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/GRONLID-green.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/GRONLID-medium+gray.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/GRONLID-natural.webp', 'https://fec-piccolo.s3-us-west-1.amazonaws.com/products/GRONLID-red.webp'];
  this.colors = ['Hyllie dark gray', 'Hyllie beige', 'Bomstad black', 'Skiftebo blue', 'Skiftebo dark gray', 'red', 'black', 'gray', 'blue'];
  this.age = Math.random();
  this.review = parseFloat(random(6));
};

ProductRecord.prototype.name = function () {
  return this.names[random(this.names.length)];
};

ProductRecord.prototype.color_image = function () {
  return this.color_images[random(this.color_images.length)];
};

ProductRecord.prototype.color = function () {
  return this.colors[random(this.colors.length)];
};

// creates a random list of products
let randProdList = function (itemCount) {
  let prodList = [];
  for (let i = 0; i < itemCount; i++) {
    let product = new ProductRecord();

    product.id = i;
    let cat = product.category;
    let nm = product.name();
    let sd = product.shortDesc;
    let ad = product.adDesc;
    let amount = product.price;
    let design = product.color_image();
    let color = product.color();
    let bd = product.age;
    let likes = product.review;

    prodList.push([product.id, cat, nm, sd, ad, amount, design, color, bd, likes]);
  }
  return prodList;
};

module.exports = randProdList;
