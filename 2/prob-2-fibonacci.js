/*
https://projecteuler.net/problem=2

Each new term in the fibznacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the fibznacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

@solution 4613732

iojs prob-2-fibonacci.js

*/

'use strict';

function calcEvens(fibz) {
	let sum = 0;

	for ( let num of fibz ) {
		sum += num % 2 === 0 ? num : 0;
	}

	return sum;
}

// get fibz up to limit, then calc evens
function getfibz(limit) {
	let fibz = [0, 1, 1];

	while ( fibz[fibz.length - 1] < limit ) {
		fibz.push( fibz[fibz.length - 1] + fibz[fibz.length - 2] );
	}

	return calcEvens(fibz);
}

console.log( getfibz(4000000) );

// alternative below using generators
(function() {
	let fibz = [0, 1, 1];
	let limit = 4000000;

	// get fibz up to limit, then calc evens
	function* fibzGen(fibz) {
		yield fibz[fibz.length - 1] + fibz[fibz.length - 2];
	}

	while ( fibz[fibz.length - 1] < limit ) {
		fibz.push(fibzGen(fibz).next().value);
	}

	console.log(calcEvens(fibz));
}());
