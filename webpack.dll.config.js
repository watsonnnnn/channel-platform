const webpack = require('webpack');
const path = require('path');
console.log(require.resolve('./src/test/path/1.js'))
module.exports = {
  entry: {
    bundle: [
      'lodash'
    ]
  },

  // context  https://github.com/webpack/docs/wiki/context  默认当前运行文件所在目录 CWD
  // https://www.qinshenxue.com/article/20170315092242.html
  // context: path.resolve(__dirname, 'node_modules'),//指定entry查找的起始目录 /a/b/c 如果context是/a 那entry就从/b/c开始

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },

  plugins: [
    new webpack.DllPlugin({
      path: './build/bundle.manifest.json',
      name: '[name]_library', //bundle.manifest.json中的name 和上面的library要一致
    })
  ],

  mode: 'development'
}