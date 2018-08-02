var _ = require('lodash');

var webpack3 = require('./index.webpack3');

webpack3()

console.log('this is webpack1.js');

var str = _.join(['Hello', 'webpack', '你好123123中国123129999'], '~');

console.log(str);

module.exports = ['index.webpack1']