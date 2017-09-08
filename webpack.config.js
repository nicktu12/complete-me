var path = require('path');

module.exports = {
  entry: './scripts/index.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: "transform-loader?brfs" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jquery.elastic.js$/, loader: 'imports-loader' },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
