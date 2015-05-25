/*

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

iojs --harmony_arrow_functions prob-21.js

*/

'use strict';

const present = require('present');

// return an array of the divisors of a number
function getDivs(num) {
	let arr = [];
	let i = 1;

	// no point in going past the halfway mark
	for ( i; i <= num / 2; i++ ) {
		if ( num % i === 0 ) {
			arr.push(i);
		}
	}

	return arr;
}

// get all amicable pairs up to a point
function getAmicables(limit) {
	let divs = [0, 1];
	let amicables = [];

	for ( let i = 2; i < limit; i++ ) {
		let sum = getDivs(i).reduce((prev, curr) => {
			return prev + curr;
		});

		divs.push(sum);

		// if the current number is in the div cache
		// ( ie, a previous number's sum equals the curent number )
		// then we check the previous number (which is equal to it's index in the cache array)
		// against the current sum, and if they match, we have found an amicable pair
		// also amicable pairs can't be the same number twice, so we check that too
		if ( i !== divs.indexOf(i) && divs.indexOf(i) === sum ) {
			amicables.push(i, divs.indexOf(i));
		}
	}

	return amicables;
}

let start = present();
let solution = getAmicables(10000).reduce((prev, curr) => {
	return prev + curr;
});
console.log(`op took ${present() - start} ms to complete`);
console.log(`Solution: ${solution}`);
