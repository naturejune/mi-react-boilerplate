var WebpackDevServer = require("webpack-dev-server");
var config = require('./webpack.config.dev');
var webpack = require("webpack");

var server = new WebpackDevServer(webpack(config), {
  contentBase: './dist',
  hot: true,
  inline: true,
  historyApiFallback: false,
  compress: true,
  clientLogLevel: 'info',
  quiet: false
});
server.listen(8080, 'localhost', function() {});