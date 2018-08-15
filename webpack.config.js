const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    index1: path.join(__dirname, 'webpackfiles/index.webpack2.js'),
    // https://github.com/webpack/webpack.js.org/issues/970 chunk
    // chunk: 源代码的抽象，如何打包和如何组织代码的那部分代码，更像是一个连接的过程，通过chunkdist中
    // 打包后的文件，首先entry chunk也就是webpack runtime code，如果不分块的话，每个bundle里面都会有
    // 的代码，然后应该是initial chunk和normal chunk，也就是初始化时执行的代码，即传入的module数组中的
    // 每一项，一般就是initial chunk，而通过lazy load加载的一般就是normal chunk，也就是require.ensure、
    // import()等一些引入的chunk
    'index-babel': [path.join(__dirname, 'webpackfiles/babel.index.js')]
  },
  // devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js', //hash后缀
    chunkFilename: '[name].chunk.js'
  },

  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   hot: true
  // },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'build')]),
    new HtmlWebpackPlugin({
      title: 'htmlplugin'
    }),
    new WebpackManifestPlugin(),
    // new webpack.ProvidePlugin({
    //   _: 'lodash'
    // })
    // new webpack.HotModuleReplacementPlugin()
  ],

  // optimization: {
  //   runtimeChunk: 'single', //会把webpack的runtime代码单独打包出来 剩余的也单独打包出来 包括css 变成chunkfile
  //   // runtimeChunk: {
  //   //   name: 'runtime1'
  //   // },
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'verdors',
  //         chunks: 'all' // 和上面的chunks配置看起来没有区别
  //       }
  //     },
  //     automaticNameDelimiter : '-'
  //   }
  // },

  module:{
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
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