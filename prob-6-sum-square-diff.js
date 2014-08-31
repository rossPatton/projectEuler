/**
 * @reference https://projecteuler.net/problem=6
 * @description
 *
 * 	The sum of the squares of the first ten natural numbers is,
 * 	12 + 22 + ... + 102 = 385
 * 	The square of the sum of the first ten natural numbers is,
 * 	(1 + 2 + ... + 10)2 = 552 = 3025
 * 	Hence the difference between the sum of the squares of the first ten natural numbers and the square of the
 * 	sum is 3025 − 385 = 2640.
 *
 * @problem Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 * @solution 25164150
*/

;(function() {
	'use strict';
	let i = 1,
			sum = 0,
			sumSq = 0;

	for (i; i <= 100; i++) {
		sum += i;
		sumSq += (i*i);
	}

	console.log("The Sum Square Difference is: " + ( (sum*sum) - sumSq) );

}());