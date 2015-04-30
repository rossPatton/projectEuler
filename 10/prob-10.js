/**
 * @reference https://projecteuler.net/problem=10
 * @description The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * @problem Find the sum of all the primes below two million.
 * @solution 142915828925
 * iojs --harmony_arrow_functions prob-10.js
*/

'use strict';

function isPrime(num) {
	const sqrt = Math.ceil(Math.sqrt(num) + 1);
	let div = 2;

	while ( div < sqrt ) {
		if ( num % div === 0 ) {
			return false;
		}
		div++;
	}
}

function getPrimes(limit) {
	let i = 3;
	let primes = [2];

	while ( primes[primes.length - 1] < limit ) {
		if ( isPrime(i) !== false ) {
			primes.push(i);
		}

		i++;
	}

	return getSum(primes);
}

function getSum(arr) {
	return arr.reduce((prev, curr) => {
		return prev + curr;
	});
}

console.log( getPrimes(2000000) );

