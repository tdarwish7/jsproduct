//require babel require hook
//babel compiles the javascript to meet browser requirements since our server is written in es6
require('babel-core/register');
//require server code
require('./src');
