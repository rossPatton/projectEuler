/**
https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

iojs prob-1.js

@solution 233168
*/

'use strict'

let sum = 0

// a generator function
function* fuzzGen(limit) {
  let count = 0;

  while ( count < limit ) {
    if ( count % 3 === 0 || count % 5 === 0 ) {
      yield count
    }

    count++
  }
}

for ( const val of fuzzGen(1000) ) {
  sum += val
}

console.log( sum )
