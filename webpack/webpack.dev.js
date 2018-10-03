const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge.strategy({ entry: 'prepend' })(config, {
  mode: 'development',
  entry: ['webpack-hot-middleware/client'],
  devtool: 'source-map',

  devServer: {
    compress: true,
    stats: {
      modules: false,
      children: false,
      colors: true
    }
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
})
