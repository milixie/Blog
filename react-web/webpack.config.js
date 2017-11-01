'use strict';
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    "./src/entry.js"
  ],
  output: {
    path: './out/',
    filename: "bundle.js"
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: "jsx!babel", include: /src/},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.scss$/, loader: "style!css!sass", postcss: [autoprefixer({browsers: ['android>=4', 'ios>=7']})]},
      {test: /\.(png|jpg)$/, loader: 'url?limit=100000'},
      {test: /\.(ttf|woff2|woff|eot|svg)$/, loader: 'url?limit=100000'}
    ]
  }
};
