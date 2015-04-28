/*
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two 3-digit numbers.
*/

// node --harmony prob-4-paindromes.js

const present = require('present');

'use strict';

// let start = present();

function palindrome(i) {
	function reverse(s) {
		return s.split('').reverse().join('');
	}

	while ( i-- ) {
		let str = (i * i).toString();
		// if we start at our limit and go backwards, the first match is the biggest
		if ( str === reverse( str ) ) {
			return str;
		}
	}
}

console.log( `Biggest 3 digit palindrome is: ${palindrome( 999 )}` );