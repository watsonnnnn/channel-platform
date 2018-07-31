var requirePack1 = require('./index.webpack1');
// var _ = require('lodash');
require('./index.css');
var imgI = require('./images/header.png');

function component() {
  console.log(requirePack1);
  console.log(imgI);
  var element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack'], '~');
  element.innerHTML = 'hello world';

  element.classList.add('red');

  return element;
}

function imgc(){
  var img = document.createElement('img');
  img.src = imgI;
  return img
}


document.body.appendChild(component());
document.body.appendChild(imgc());

module.exports = ['index.webpack']