const path = require('path');
const str = path.join(__dirname, 'index.js');
const str1 = path.join(__dirname, '/index.js');
const str2 = path.join(__dirname, '../index.js');
const str7 = path.join(__dirname, '/index');

const str4 = path.resolve(__dirname, 'index.js');
const str5 = path.resolve(__dirname, '/index.js');
const str6 = path.resolve(__dirname, '../index.js');
const str8 = path.join(__dirname, '/index');

console.log(str)
console.log(str1)
console.log(str2)
console.log(str4)
console.log(str5)
console.log(str6)
console.log(str7)
console.log(str8)

// D:\sdprojects\channel-platform\src\test\path>node 1.js
// D:\sdprojects\channel-platform\src\test\path\index.js
// D:\sdprojects\channel-platform\src\test\path\index.js
// D:\sdprojects\channel-platform\src\test\index.js
// D:\sdprojects\channel-platform\src\test\path\index.js
// D:\index.js
// D:\sdprojects\channel-platform\src\test\index.js
// D:\sdprojects\channel-platform\src\test\path\index
// D:\sdprojects\channel-platform\src\test\path\index