/**
https://projecteuler.net/problem=1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

iojs --harmony_arrow_functions prob-1.js

@solution 233168
*/

'use strict';

const _ = require('lodash');

function getSumOfMultiples(start, end) {
	return _.range(start, end)
	.filter(num => {
		return num % 3 === 0 || num % 5 === 0;
	})
	.reduce((prev, curr) => {
		return prev + curr;
	});
}

console.log( getSumOfMultiples(1, 1000) );
