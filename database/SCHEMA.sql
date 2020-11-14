DROP DATABASE IF EXISTS ikea_products;
CREATE DATABASE ikea_products;

USE ikea_products;

CREATE TABLE products (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  product_id INT NOT NULL,
  product_category VARCHAR(50) NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  product_short_desc TEXT NOT NULL,
  product_ad_desc TEXT NOT NULL,
  product_price INT NOT NULL,
  product_color_image TEXT NOT NULL,
  product_color TEXT NOT NULL,
  product_age INT NOT NULL,
  product_avg_rev FLOAT(2, 1) NOT NULL
);

/* use mysql -u root < ./database/SCHEMA.sql to add database
*/