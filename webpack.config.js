'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: [
    'babel-polyfill',
    __dirname + '/src/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', {'modules': false}]
          ]
        }
      }
    ]
  }
}