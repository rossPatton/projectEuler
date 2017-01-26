/**
https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

@solution 233168
*/

'use strict'

const getSumOfMultiples = (limit) => {
  return [...Array(limit).keys()]
    .filter(num => num % 3 === 0 || num % 5 === 0)
    .reduce((prev, curr) => prev + curr)
}

console.log( getSumOfMultiples(1000) )
module.exports = getSumOfMultiples
