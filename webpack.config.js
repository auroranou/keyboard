'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: path.resolve(__dirname, 'src/index.ts'),
  devtool: 'source-map',
  devServer: {
    contentBase: './src',
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(__dirname, 'src/index.html'),
      title: 'HTML5 audio synth'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
}