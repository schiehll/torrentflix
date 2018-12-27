const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

const resolve = filePath => path.resolve(__dirname, '../', filePath)

module.exports = {
  entry: [resolve('src/index')],

  output: {
    path: resolve('public'),
    publicPath: '/',
    filename: 'js/[name].[hash].js',
    chunkFilename: 'js/[name].[hash].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [resolve('src')],
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: ['node_modules', resolve('src')]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html'),
      chunksSortMode: 'none'
    }),
    new Dotenv()
  ],

  stats: {
    modules: false,
    children: false,
    colors: true
  }
}
