/*
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two 3-digit numbers.
*/

// node --harmony prob-4-paindromes.js

// splits string into arr, reverses array, returns a rejoined str
function reverse(s) {
  return s.split('').reverse().join('');
}

;(function() {
	'use strict';

	const upperLimit = 999;
	var result = [];

	for (let i = 0; i < upperLimit; i++) {
		let tempNum = i*i;

		if (tempNum.toString() === reverse(tempNum.toString())) {
			result.push(tempNum);
		}
	}

	console.log('Biggest 3 digit palindrome is: ' + result[result.length-1]);

}());