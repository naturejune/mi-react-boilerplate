var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    './dev/index',
  ],
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dev/index.html',
      filename: './index.html'
    })
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.module.css$/,
      loader: 'style-loader!css-loader?modules'
    }]
  }
};