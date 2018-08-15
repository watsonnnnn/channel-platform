import '../node_modules/core-js/modules/es6.string.includes'
import '../node_modules/core-js/modules/es6.object.assign'
import '../node_modules/core-js/modules/es6.set'

const a = 123333;
var s = 1;

var o1 = {
  q:1
}

var o2 = {
  q:2
}

let nick = '世界';
let desc = `你好 ${nick}`;

var s = new Set(['a','s','d'])
console.log(s)

var o3 = Object.assign({},o1,o2)

console.log(o3)

var str = 'helloworld';

console.log(str.includes('orl'));

// function foo(one: any, two: number, three?): string {

// }

export default a