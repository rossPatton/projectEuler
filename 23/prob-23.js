/*

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

iojs --harmony_arrow_functions prob-23.js

*/

'use strict';

const range = require('lodash/utility/range');
const indexOf = require('lodash/array/indexOf');
let abundants = [];


function getDivs(num) {
	let range = num / 2;
	let arr = [0];
	let i = 0;

	for ( i; i <= range; i++ ) {
		if ( num % i === 0 ) {
			arr.push(i);
		}
	}

	// return arr;
	return sumDivs(arr, num);
}

function sumDivs(arr, num) {
	let sum = arr.reduce((prev, curr) => {
		return prev + curr;
	});

	// return sum;

	return isAbundant(sum, num);
}

function isAbundant(sum, original) {
	if ( sum > original ) {
		return true;
	}
}

function getSum() {
	let limit = range(12, 20161);
	var a = 0;
	var i = 0;
	var j = 0;
	var len = abundants.length;
	var isNotSumOfAbundants = false;
	let results = [];

	for ( i in limit ) {
		if ( typeof getDivs(i) !== 'undefined' ) {
			abundants.push(i);
		}
	}

	// console.log( abundants.length );
	// abundants.forEach(function(a, i) {
	// 	isNotSumOfAbundants = indexOf( limit, a + abundants[i + 1] ) === -1;

	// 	if ( isNotSumOfAbundants ) {
	// 		return results.push( s );
	// 	}
	// });

	// for ( a in abundants ) {
	// 	isNotSumOfAbundants = abundants.every(function(a, i) {
	// 		return a + abundants[i + 1] !== j;
	// 	});
	// }

	// for ( j in limit ) {
	// 	isNotSumOfAbundants = abundants.every(function(a, i) {
	// 		return a + abundants[i + 1] !== j;
	// 	});
		// ( abundants[a] + abundants[a + 1] ) === j;

		// if ( isNotSumOfAbundants ) {
		// 	results.push( j );
		// }
			// isSumOfAbundants = abundants.some(function(a, i) {
			// 	console.log( 'abundant: ', a );
			// 	console.log( 'index: ', i );
			// 	console.log( 'sum: ', a + abundants[i + 1] );
			// 	console.log( 'int: ', j );
			// 	return a + abundants[i + 1] === j;
			// });

			// if ( !isSumOfAbundants ) {
			// 	results.push( j );
			// }
	// }

	console.log( abundants.length );
	console.log( results.length );

	return parseInt( results.reduce((prev, curr) => {
		return prev + curr;
	} ), 10 );

			// for ( a; a < len; a++ ) {
			// 	let isSumOfAbundants = abundants.some(function(abundant, i) {
			// 		return abundants + ( abundants[i + 1] ) === i
			// 	});

			// 	if ( abundants[a] + ( abundants[a + 1] ) === i ) {
			// 		isSumOfAbundants
			// 		results.push(i);
			// 	}
			// }
	// 	}
	// }

	// return abundants
}

// 4179871
// for ( let i = 1; i <= 28123; i++ ) {
// 	if ( typeof getDivs(i) !== 'undefined' ) {
// 		abundants.push(i);
// 	}
// }

console.log( getSum() );
// console.log( abundants );

