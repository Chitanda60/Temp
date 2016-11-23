var path = require('path')

var path1 = 'path1',
    path2 = 'path2//pp\\',
    path3 = '../path3';

var node_modules = path.resolve(__dirname, 'node_modules')
var pathToReact = path.resolve(node_modules, 'react')
console.log(node_modules)
console.log(pathToReact)