const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');
const merge = require('webpack-merge');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const argv = require('yargs').argv;

console.log(argv.env.development) 

module.exports = merge(common, {

  devtool: 'source-map',
  entry: {
    // index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
    // index1: path.join(__dirname, 'webpackfiles/index.webpack1.js')
  },

  // context  https://github.com/webpack/docs/wiki/context 
  // https://www.qinshenxue.com/article/20170315092242.html

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true
  },

  // optimization: {
  // //   minimizer: [
  // //     new UglifyJsPlugin({
  // //       cache: true,
  // //       parallel: true,
  // //       sourceMap: true // set to true if you want JS source maps
  // //     }),
  // //     new OptimizeCSSAssetsPlugin({})
  // //   ],
  //   runtimeChunk: 'single', //会把webpack的runtime代码单独打包出来 剩余的也单独打包出来 包括css 变成chunkfile
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

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './build/*.dll.js'),
      includeSourcemap: false // default true. If true, will add filepath + '.map' to the compilation as well.
    }),

    new webpack.DllReferencePlugin({
      // context: __dirname,
      manifest: require("./build/bundle.manifest.json"),
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', MiniCssExtractPlugin.loader, { // style loader 负责将样式用style标签放到head中 
          //extractplugin负责提取css 二者共存的话，cssloader的modules tru会报错
        use: [argv.env.development?'style-loader': MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options:{
            // url: false, //设置不解析css中的url()
            modules: true
          }
        } ]
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        // https://stackoverflow.com/questions/31781756/is-there-any-practical-difference-between-using-babel-runtime-and-the-babel-poly/31790138#31790138
        // https://xwenliang.cn/p/5a3a410b9a06a7542c000002
      }
    ]
  },
  performance: {
    hints: false
  },

  mode: 'development' // 相关配置 比如uglifyjs
})

// module.exports = (env,argv) => {
//   console.log(env, env===process.env, process.env.NODE_ENV,argv) // 在package.json中 script启动时指定
//   return {
//     entry: {
//       // index: path.join(__dirname, 'webpackfiles/index.webpack.js'),
//       index1: path.join(__dirname, 'webpackfiles/index.webpack1.js')
//     },
//     devServer: { 
//       // 使用本身已经存在的文件 作为server资源 所以配置此项 其他项的效果全由已存在文件的配置项决定
//       contentBase: path.join(__dirname, 'build'),
//       hot: true
//     },
//     plugins: [
//       new webpack.HotModuleReplacementPlugin()
//     ],

//     module: {
//       rules: [{
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }]
//     },

//     mode: 'development' // 相关配置 比如uglifyjs
//   }
// }