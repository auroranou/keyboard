var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/lib',
  entry: [
    'babel-polyfill',
    __dirname + '/index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'lib'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],  
        }
      }
    ]
  }
}