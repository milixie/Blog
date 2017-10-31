const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, ''),
  entry: [
    path.resolve(__dirname, 'src/index.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('index.css')
  ]
};

