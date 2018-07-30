const path = require('path');

module.exports = {
  entry: {
    index: path.join(__dirname, 'webpackfiles/index.webpack.js')
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].js', //hash后缀
    chunkFilename: '[name].chunk.js'
  },

  mode: 'development' // 相关配置 比如uglifyjs
}