const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {

  devtool: 'inline-source-map',
  entry: {
    // index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    index1: path.join(__dirname, 'webpackfiles/index.webpack1.js')
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader' ]
      }
    ]
  },

  mode: 'development' // 相关配置 比如uglifyjs
})