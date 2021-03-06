/**
 * @reference https://projecteuler.net/problem=5
 * @description  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * @problem What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * @solution 232792560
*/

// iojs prob-5-smallest-multiple

'use strict';
const present = require('present');
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const start = present();

let num = 1;
let remainderExists = true;

while ( remainderExists === true ) {
	let isDivis = true;
	let i = arr.length - 1;

	for ( i; i >= 0; i-- ) {
	/* oddly, in my tests anyway, while outperforms for at smaller array sizes
		 buuuuutt falls behind when the array gets larger. at len = 20, while is routinely .5 - 1s slower
	*/
		if ( num % arr[i] !== 0 ) {
			isDivis = false;
			break;
		}
	}

	if ( isDivis === true ) {
		let end = present();
		remainderExists = false;

		console.log(`op took: ${(end - start)} ms.`);
		console.log(`Smallest Multiple Is: ${num}`);
		return;
	}

	num++;
}
