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

  module:{
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      }
    ]
  },

  mode: 'development' // 相关配置 比如uglifyjs
}