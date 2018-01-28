var path = require('path');

module.exports = {
  context: __dirname +'/private',
  entry: './views/main.jsx',
  output: { path: __dirname, filename: '/public/bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
