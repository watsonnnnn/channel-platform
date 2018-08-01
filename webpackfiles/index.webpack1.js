var _ = require('lodash');
console.log('this is webpack1.js');

var str = _.join(['Hello', 'webpack', '你好中国123123'], '~');

console.log(str);

module.exports = ['index.webpack1']