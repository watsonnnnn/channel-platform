const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    // index1: path.join(__dirname, 'webpackfiles/index.webpack2.js')
    index1: path.join(__dirname, 'webpackfiles/index.webpack1.js'),

    'index-babel': ['babel-polyfill',path.join(__dirname, 'webpackfiles/babel.index.js')]
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[hash].js', //hash后缀
    chunkFilename: '[name].[hash].chunks.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'html',
      // chunks: ['app']
    }),
  ],

  module: {
    rules: [{
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