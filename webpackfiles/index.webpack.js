var requirePack1 = require('./index.webpack1');
// var _ = require('lodash');
require('./index.css');

function component() {
  console.log(requirePack1);

  var element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], '~');
  element.innerHTML = 'hello world';

  element.classList.add('red');

  return element;
}

document.body.appendChild(component());

module.exports = ['index.webpack']