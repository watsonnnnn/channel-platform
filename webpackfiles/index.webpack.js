// var _ = require('lodash');
require('./indexcss.css');
var imgI = require('./images/header.png');
var xmlData = require('./xml/data.xml');
var requirePack2 = require('./index.webpack2');
var mathF = require('./math').square;
// import {square as mathF} from './math';

if (process.env.NODE_ENV !== 'production') {
  console.log(process.env.NODE_ENV)
  console.log('Looks like we are in development mode!');
}

function component() {
  console.log(imgI);
  console.log(mathF(30));
  console.log(process.env.NODE_ENV);
  var element = document.createElement('div');

  // element.innerHTML = _.join(['Hello', 'webpack', '你好中国1231299999'], '~');
  // element.innerHTML = 'hello world 你好中国123123';

  element.classList.add('red');

  var button = document.createElement('button');

  button.onclick = requirePack2.click;

  button.innerHTML = '点这里';

  document.body.appendChild(button);

  return element;
}

function imgc(){
  var img = document.createElement('img');
  img.src = imgI;
  return img
}

var ele = component();

document.body.appendChild(ele);
document.body.appendChild(imgc());

console.log(xmlData);

console.log(module);

if(module.hot){
  module.hot.accept('./index.webpack2', function(){
    console.log('accept hot webpack2');
    // requirePack2.click();
    document.removeChild(ele);
    ele = component();
    document.body.appendChild(ele);
  });
}

module.exports = ['index.webpack']