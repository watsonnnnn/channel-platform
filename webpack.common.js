const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    // index1: path.join(__dirname, 'webpackfiles/index.webpack2.js')
    index1: path.join(__dirname, 'webpackfiles/index.webpack1.js')
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].js', //hash后缀
    chunkFilename: '[name].[hash].chunks.js'
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'build')]),
    new HtmlWebpackPlugin({
      title: 'htmlplugin',
      // chunks: ['app']
    }),
  ],

  module:{
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.(ttf|woff|woff2|otf)$/,
        use: ['file-loader']
      },
      {
        test: /.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /.xml$/,
        use: ['xml-loader']
      }
    ]
  }
}