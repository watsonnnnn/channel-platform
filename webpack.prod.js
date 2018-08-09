const path = require('path');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'source-map',

  entry: {
    // index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    // index1: path.join(__dirname, 'webpackfiles/index.webpack1.js')
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
    // runtimeChunk: 'single', //会把webpack的runtime代码单独打包出来 剩余的也单独打包出来 包括css 变成chunkfile
    // runtimeChunk: {
    //   name: 'runtime1'
    // },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'verdors',
          chunks: 'all' // 和上面的chunks配置看起来没有区别
        }
      },
      automaticNameDelimiter : '-'
    }
  },

  plugins: [
    new WebpackManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader' ]
      }
    ]
  },

  mode: 'production' // 相关配置 比如uglifyjs 命令行选项优于此配置 可以用-p 或者 --mode=production
})