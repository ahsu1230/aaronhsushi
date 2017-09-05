var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src_react/public');
var APP_DIR = path.resolve(__dirname, 'src_react/app');

module.exports = {
  entry: [APP_DIR + '/jsx/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
	contentBase: "./src",
	hot: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      { 
        test: /\.styl$/,
	loader: 'style-loader!css-loader?url=false!stylus-loader'
      }
    ]
  }
};
