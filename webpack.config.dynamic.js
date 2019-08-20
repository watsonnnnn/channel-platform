const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    'index-dynamic': [path.join(__dirname, 'webpackfiles/index.dynamic.js')]
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js', //hash后缀
    chunkFilename: '[name].chunk.js',
    // publicPath: './'
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'build')]),
    new HtmlWebpackPlugin({
      title: 'htmlplugin',
      // filename: 'page1/index.html',
      // chunks: ['page1/index','page1/runtime1','page1/vendors']
    }),
    // new BundleAnalyzerPlugin()
    // new WebpackManifestPlugin(),
    // new webpack.ProvidePlugin({
    //   _: 'lodash'
    // })
    // new webpack.HotModuleReplacementPlugin()
  ],

  module:{
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240 // bytes
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
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  mode: 'development' // 相关配置 比如uglifyjs
}
