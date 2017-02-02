/*jslint indent: 2, maxlen: 120, node: true */
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

  function retFalse() { return false; }

  function withArgPairArray(f) {
    return function (a, b) { return f([a, b]); };
  }

  var lodash,
    nativeFloor = Math.floor,
    toInteger = Math.round,
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER,
    hasBuffer = ((typeof Buffer)[0] !== 'u'),  // o(bject) or f(unction)
    isBuffer = (hasBuffer ? Buffer.isBuffer : retFalse),
    concatBuffers = (hasBuffer && withArgPairArray(Buffer.concat));

  lodash = (function preserveLodashIndent() {
    function isIterateeCall() { return false; }


    //----- 8< ----- 8< ----- lodash code ----- 8< ----- 8< -----//

    function baseRepeat(orig, n) {
      var result = orig.slice(0, 0), concat;

      concat = ((orig.concat && function (a, b) { return a.concat(b); })
        || (isBuffer(orig) && concatBuffers)
        );

      if (!orig || n < 1 || n > MAX_SAFE_INTEGER) {
        return result;
      }
      // Leverage the exponentiation by squaring algorithm for a faster repeat.
      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
      do {
        if (n % 2) {
          result = concat(result, orig);
        }
        n = nativeFloor(n / 2);
        if (n) {
          orig = concat(orig, orig);
        }
      } while (n);

      return result;
    }

    function repeat(orig, n, guard) {
      if (((guard ? isIterateeCall(orig, n, guard) : n) === undefined)) {
        n = 1;
      } else {
        n = toInteger(n);
      }
      return baseRepeat(orig, n);
    }

    //----- >8 ----- >8 ----- lodash code ----- >8 ----- >8 -----//


    return { repeat: repeat, baseRepeat: repeat };
  }());


  return lodash;
}());
