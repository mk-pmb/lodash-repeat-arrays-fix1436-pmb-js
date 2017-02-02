/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var r = require('../repeat.js').repeat, eq = require('assert').deepStrictEqual;

eq(r('ol', 3), 'ololol');
eq(r(['ol'], 3), ['ol', 'ol', 'ol']);
eq(r(Buffer.from('ol'), 3), Buffer.from('ololol'));






console.log("+OK all test passed.");    //= "+OK all test passed."
