## webpack

### externals
使用外部指定模块，build后的文件会在module组中加入外部模块

https://github.com/nicewahson/webpack-library-demo/blob/master/webpack-library/dist/webpack-numbers.js

### dllplugin

### context
默认当前目录，是webpack的运行目录。webpack中entry查找的相对起始目录，配置此项，entry中直接使用相对目录的话就是相对于此项配置。

https://www.qinshenxue.com/article/20170315092242.html

### chunk
就是outputfile。2个entry a.js b.js 生成2个output file的话，每个里面有entry chunk，initial chunk。如果提取的话，可以提出一个entry chunk，剩下2个initial chunk，而提取里用的minChunks:2表示的是在至少2个chunk块里出现过的代码提取出来。
* entry chunk。webpack的runtime code，bootstrap code，引导程序
* normal chunk。lazy load进来的就是chunk
* initial chunk。其余的chunk



