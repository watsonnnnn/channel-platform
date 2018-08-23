var _ = require('lodash');

var webpack3 = require('./index.webpack3');

require('./css/index2.css');

webpack3()

console.log('this is webpack1.js');

var str = _.join(['Hello', 'webpack', '你好123123中国123129999'], '~');

console.log(str);

module.exports = ['index.webpack1']