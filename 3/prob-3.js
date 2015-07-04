/*
	https://projecteuler.net/problem=3
	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number 600851475143 ?
	iojs prob-3.js
	solution: 6857 of [ 71, 839, 1471, 6857 ]
*/

'use strict';

let results = [];

function factor(num) {
	const root = Math.sqrt(num);
	let f = 2;

	// keep dividing up to square root
	// also a prime can't be even obvs
	if ( num % f !== 0 ) {
		f = 3;
		while ( num % f !== 0  ) {
			f = f + 2;
		}
	}

	// if no factor found then num is prime
	// f = f <= root ? f : num;
	results.push(f); // push latest prime factor

	// keep going until f and num equal each other
	return f === num ? Math.max.apply(null, results) : factor(num/f) ;
}

console.log( factor(600851475143) );
