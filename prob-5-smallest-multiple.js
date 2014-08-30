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
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
				start = present();

	let	num = 1,
			remainderExists = true;

	while(remainderExists === true) {
		let isDivis = true,
				i = arr.length - 1;

		for (i; i >= 0; i--) {
		/* oddly, in my tests anyway, while outperforms for at smaller array sizes
			 but falls behind when the array gets larger
		*/
		// while(len--) {
			if (num % arr[i] !== 0) {
				isDivis = false;
				break;
			}
		}

		if (isDivis === true) {
			let end = present();
			remainderExists = false;

			console.log('sort1 took: ' + (end - start) + ' ms.');
			console.log('Smallest Multiple Is: ' + num);
			return;
		}

		num++;

	}

}());

// var time = process.hrtime();
// // [ 1800216, 25 ]

// setTimeout(function() {
//   var diff = process.hrtime(time);
//   // [ 1, 552 ]

//   console.log('benchmark took %d nanoseconds', diff[0] * 1e9 + diff[1]);
//   // benchmark took 1000000527 nanoseconds
// }, 1000);

// num % arr[i] === 0
		// while(isDivis === true) {

		// 	console.log(isDivis)

		// 	// if (len === 0) {
		// 	// 	console.log('divisible by: ' + num);
		// 	// }

		// 	num++;
		// 	isDivis = (num % arr[len] === 0);

		// }

		// num++;

		// console.log(isDivis);
		// for (let i = 0; i <= arr.length - 1; i++) {
		// 	// for (let i = 0; i <= arr.length - 1; i++) {
		// 	if (num % arr[i] === 0) {
		// 		console.log('divisible by: ' + i);
		// 		if (i === arr.length - 1) {
		// 			remainderExists = false;
		// 			console.log(num)
		// 		}
		// 	} else {
		// 		num++;
		// 	}
		// }