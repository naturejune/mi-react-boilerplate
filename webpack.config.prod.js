module.exports = {
  entry: './src/index',
  output: {
    filename: 'index.js',
    path: __dirname + '/lib',
    library: 'Mi',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
  },
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