const path = require('path')
const rootDir = path.resolve('./')
const distDir = path.join(rootDir, '/dist')
const srcDir = path.join(rootDir, '/src')

module.exports = {
  entry: {
    bundle: path.join(srcDir, 'index.js')
  },
  output: {
    path: distDir,
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: 'inline-source-map'
}
