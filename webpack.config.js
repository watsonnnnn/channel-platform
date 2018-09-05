const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    // "page1/index": path.join(__dirname, 'webpackfiles/index.webpack.js'),
    // "page1/index1": path.join(__dirname, 'webpackfiles/index.webpack3.js'),
    // index1: path.join(__dirname, 'webpackfiles/index.webpack2.js'),
    // https://github.com/webpack/webpack.js.org/issues/970 chunk
    // chunk: 源代码的抽象，如何打包和如何组织代码的那部分代码，更像是一个连接的过程，通过chunkdist中
    // 打包后的文件，首先entry chunk也就是webpack runtime code，如果不分块的话，每个bundle里面都会有
    // 的代码，然后应该是initial chunk和normal chunk，也就是初始化时执行的代码，即传入的module数组中的
    // 每一项，一般就是initial chunk，而通过lazy load加载的一般就是normal chunk，也就是require.ensure、
    // import()等一些引入的chunk
    'index-babel': [path.join(__dirname, 'webpackfiles/babel.index.js')] // 不用preset env 398kb 用entry: 359kb 用usage: 87kb production 18kb
    // "commonBundle": ["lodash"]
  },
  // devtool: 'inline-source-map',

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js', //hash后缀
    chunkFilename: '[name].chunk.js',
    // publicPath: './'
  },

  // devServer: {
  //   contentBase: path.join(__dirname, 'build'),
  //   hot: true
  // },

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

  // optimization: {
  //   // runtimeChunk: 'single', //会把webpack的runtime代码单独打包出来 剩余的也单独打包出来 包括css 变成chunkfile
  //   runtimeChunk: {
  //     name: 'page1/runtime1'
  //   },
  //   splitChunks: {
  //     chunks: 'all',
  //     // chunks(chunk){
  //     //   console.log(chunk.name,'line====') // 出现undefined是async chunk 的name没有指定
  //     //   return 'all'
  //     // },
  //     cacheGroups: {
  //       commonUtil: {
  //         chunks: 'initial',
  //         name: 'page1/commonUtil',
  //         minChunks: 2,
  //         minSize: 200 // bytes 生成的chunk最小大小
  //       },
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'page1/vendors', // 不使用name就用key值和chunk拼接
  //         priority: 5  // groups中多项都命中某个module的话，按这个来，module存在优先级高的chunk里面 default:0
  //         // chunks: 'all' // 和上面的chunks配置看起来没有区别(inherite来， 进行单独个性化配置)
  //         // chunks(chunk){
  //         //   console.log(chunk.name,'-----------')
  //         // }
  //       }
  //     },
  //     // automaticNameDelimiter : '-'
  //   }
  // },

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