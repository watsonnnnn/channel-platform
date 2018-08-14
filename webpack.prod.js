const path = require('path');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        // minify: function(file, sourceMap) { // 1.2.7不支持
        //   const extractedComments = [];
   
        //   // Custom logic for extract comments
         
        //   const { error, map, code, warnings } = require('uglify-module') // Or require('./path/to/uglify-module')
        //     .minify(
        //       file,
        //       { /* Your options for minification */ },
        //     );
   
        //   return { error, map, code, warnings, extractedComments };
        //  }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: 'single', //会把webpack的runtime代码单独打包出来 剩余的也单独打包出来 包括css 变成chunkfile
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
      // automaticNameDelimiter : '-'
    }
  },

  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'build')]),
    new WebpackManifestPlugin(),// 资源映射文件 名字使用entry
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(),

    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './build/*.dll.js'),
      includeSourcemap: false // default true. If true, will add filepath + '.map' to the compilation as well.
    }),

    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./build/bundle.manifest.json"),
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options:{
            // url: false, //设置不解析css中的url()
            modules: true
          }
        } ]
      },
      
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader']
      }
    ]
  },

  mode: 'production' // 相关配置 比如uglifyjs 命令行选项优于此配置 可以用-p 或者 --mode=production
})