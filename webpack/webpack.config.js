const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolve = filePath => path.resolve(__dirname, '../', filePath)

module.exports = {
  entry: [resolve('src/client/index')],

  output: {
    path: resolve('dist/client'),
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
      template: resolve('src/client/index.html'),
      chunksSortMode: 'none'
    })
  ],

  stats: {
    modules: false,
    children: false,
    colors: true
  }
}
