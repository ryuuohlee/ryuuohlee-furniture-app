const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: './client/dist'
  },
  module: {
    rules: [
      {
        test : [/\.jsx$/],
        include : ,
        exclude: '/node_modules',
        loader : 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
}