'use strict';

require('file-loader?name=[name].[ext]!./index.html');

let Foo = require('./modules/foo.ts').Foo;
let f = new Foo();

console.info(Foo);
console.info(f);
console.info(Foo.bar());