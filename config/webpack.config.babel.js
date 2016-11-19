const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const paths = require('./paths')
const vendor = require('./vendor')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    vendor: vendor.concat([
      // https://github.com/facebookincubator/create-react-app/tree/master/packages/react-dev-utils#webpackhotdevclientjs
      require.resolve('react-dev-utils/webpackHotDevClient'),
      require.resolve('./polyfills')
    ]),
    app: paths.appIndexJs
  },

  output: {
    path: paths.appBuild,
    filename: 'js/[name].js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.json']
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        include: paths.appSrc,
        loader: 'babel-loader'
      },
      {
        test: /\.json?/,
        loader: 'json-loader'
      }
    ]
  },

  plugins: [
    // Used to split out our sepcified vendor script
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'js/[name].[hash].js'
    }),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),

    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify(process.env.NODE_ENV)}
    }),
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    new WatchMissingNodeModulesPlugin(paths.appNodeModules)
  ]
}
