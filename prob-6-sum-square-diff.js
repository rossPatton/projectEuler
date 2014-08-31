/**
 * @reference https://projecteuler.net/problem=5
 * @description  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * @problem What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * @solution 232792560
*/

// perfs
const present = require('present');

;(function() {
	'use strict';
	let sum = 0,
			sumSq = 0;

	for (var i = 1; i <= 100; i++) {
		sum += i;
	}

	for (var j = 1; j <= 100; j++) {
		sumSq += (j*j);
	}

	console.log("The Sum Square Difference is: " + ( (sum*sum) - sumSq) );

}());