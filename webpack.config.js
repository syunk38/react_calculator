const path = require('path')
const rootDir = path.resolve('./')
const distDir = path.join(rootDir, '/dist')
const srcDir = path.join(rootDir, '/src')

module.exports = {
  entry: {
    javascript: path.join(srcDir, 'index.js'),
    html: path.join(srcDir, 'index.html')
  },
  output: {
    path: distDir,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'dist',
    port: 1337
  },

  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  }
}
