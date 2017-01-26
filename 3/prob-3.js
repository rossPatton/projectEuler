/*
  https://projecteuler.net/problem=3
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
  solution: 6857 of [ 71, 839, 1471, 6857 ]
*/

'use strict';

const results = []

function factor(num) {
  const root = Math.sqrt(num)
  let f = 2

  console.log('num: ', num)

  // keep dividing up to square root
  // also a prime can't be even obvs
  if ( num % f !== 0 ) {
    f = 3
    while ( num % f !== 0 && f <= root ) {
      f = f + 2
    }
  }

   // push latest prime factor
  f = f <= root ? f : num
  results.push(f)

  if (f === num) {
    console.log('results: ', results)
    return Math.max.apply(null, results)
  }

  // keep going until f and num equal each other
  return factor(num/f) ;
}

console.log( factor(600851475143) );
