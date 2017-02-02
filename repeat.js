﻿/*jslint indent: 2, maxlen: 120, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

/**
 * lodash (excerpt) <https://lodash.com/>
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */


module.exports = (function () {
  var lodash,
    nativeFloor = Math.floor,
    toInteger = Math.round,
    toString = String,
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;

  lodash = (function preserveLodashIndent() {
    function isIterateeCall() { return false; }


    //----- 8< ----- 8< ----- lodash code ----- 8< ----- 8< -----//

    function baseRepeat(string, n) {
      var result = '';
      if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result += string;
        }
        n = nativeFloor(n / 2);
        if (n) {
          string += string;
        }
      } while (n);

      return result;
    }

    function repeat(string, n, guard) {
      if ((guard ? isIterateeCall(string, n, guard) : n === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(toString(string), n);
    }

    //----- >8 ----- >8 ----- lodash code ----- >8 ----- >8 -----//


    return { repeat: repeat, baseRepeat: repeat };
  }());


  return lodash;
}());