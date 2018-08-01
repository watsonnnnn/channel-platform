const path = require('path');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
  devtool: 'source-map',

  entry: {
    // index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    index1: path.join(__dirname, 'webpackfiles/index.webpack1.js')
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader' ]
      }
    ]
  },

  mode: 'production' // 相关配置 比如uglifyjs
})