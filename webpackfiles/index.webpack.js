var requirePack1 = require('./index.webpack1');
var _ = require('lodash');

function component() {
  console.log(requirePack1);

  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], '~');

  return element;
}

document.body.appendChild(component());

module.exports = ['index.webpack']