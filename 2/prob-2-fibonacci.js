/*
https://projecteuler.net/problem=2

Each new term in the fibsnacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the fibsnacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

// iojs prob-2-fibonacci.js

'use strict';

function calcEvens(fibs) {
	let len = fibs.length;
	let sum = 0;

	while ( len-- ) {
		if ( fibs[len] % 2 === 0 ) {
			sum += fibs[len];
		}
	}

	return sum;
}

// get fibs up to limit, then calc evens
function getFibs(limit) {
	let fibs = [0, 1, 1];

	while ( fibs[fibs.length - 1] < limit ) {
		fibs.push( fibs[fibs.length - 1] + fibs[fibs.length - 2] );
	}

	return calcEvens(fibs);
}

console.log( getFibs(4000000) );
