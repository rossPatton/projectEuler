/**
 * @reference https://projecteuler.net/problem=7
 * @description By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * @problem What is the 10,0001st prime number?
 * @solution 104743
 * iojs prob-7.js
*/

'use strict';

// still hate primes, and math, but will come back to this later
const present = require('present');

function isPrime(num) {
	const limit = Math.ceil(Math.sqrt(num) + 1);
	let div = 2;

	while ( div < limit ) {
		if ( num % div === 0 ) {
			return false;
		}
		div++;
	}
}

function nthPrime(goal) {
	const start = present();
	let i = 3;
	let primes = [2];

	while ( primes.length < goal ) {
		if ( isPrime(i) !== false ) {
			primes.push(i);
		}

		i++;
	}

	console.log(`op took: ${present() - start} ms.`);
	return primes[primes.length - 1];
}

console.log( nthPrime(10001) );

