const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // mode: 'development',
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: 3000
 },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
})