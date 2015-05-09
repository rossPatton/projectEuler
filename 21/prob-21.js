/*

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).

If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

iojs --harmony_arrow_functions prob-21.js

*/

'use strict';

let cache = [];

function getDivs(num) {
	let range = num / 2;
	let arr = [];
	let i = 0;

	for ( i; i <= range; i++ ) {
		if ( num % i === 0 ) {
			arr.push(i);
		}
	}

	return sumDivs(arr);
}

function sumDivs(arr) {
	return arr.reduce((prev, curr) => {
		return prev + curr;
	});
}


for ( let i = 220; i < 10000; i++ ) {
	cache.push({
		num: i,
		val: getDivs(i)
	});
}

console.log( cache );
