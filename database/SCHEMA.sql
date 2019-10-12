DROP DATABASE IF EXISTS ikea_products;
CREATE DATABASE ikea_products;

USE ikea_products;

CREATE TABLE products (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  product_category VARCHAR(50) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  product_short_desc VARCHAR(80) NOT NULL,
  product_ad_desc VARCHAR(200) NOT NULL,
  product_price FLOAT(6,2) NOT NULL,
  product_color VARCHAR(30) NOT NULL,
  product_age DATE NOT NULL
);

/* use mysql -u root < SCHEMA.sql to add database
*/