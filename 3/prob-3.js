/*
	https://projecteuler.net/problem=3
	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number 600851475143 ?
	iojs prob-3.js
*/

// this is not finished, could be much better
'use strict';

function primeFactors( num, res ) {
	let root = Math.sqrt(num);
	let result = res ? res : [];
	let x = 3;

	// keep dividing up to square root
	while( ( num % x ) && x < root ) {
		x = x + 2;
	}

	// if no factor found then num is prime
	x = ( x <= root ) ? x : num;
	result.push(x); // push latest prime factor

	// if num isn't prime factor make recursive call
	return ( x === num ) ? result : primeFactors( num/x, result ) ;
}

console.log( primeFactors(600851475143) );
