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
      },
      {
        test: /\.png$/,
        include: [resolve('src/images')],
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]'
        }
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
    new Dotenv({ systemvars: true })
  ],

  stats: {
    modules: false,
    children: false,
    colors: true
  },

  target: 'web',
  node: {
    fs: 'empty'
  }
}
