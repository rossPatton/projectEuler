/**
 * @reference https://projecteuler.net/problem=9
 * @description  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * @problem Find the product abc.
 * @solution a 200 plus b 375 plus c 425 equals 1000
 * iojs prob-9.js
 */

'use strict';
const present = require('present');
const start = present();
const sum = 1000; // upper limit, start here

let a = 1;

for (a; a <= (sum / 3); a++) {
	let b = (a + 1);

	for (b; b <= (sum / 2); b++) {
		let c = sum - a - b;

		if ((a*a) + (b*b) === (c*c)) {
			let end = present();
			console.log('operation took: ' + (end - start) + ' ms');
			console.log('a ' + a + ' plus b ' + b + ' plus c ' + c + ' equals ' + (a + b + c));
			return;
		}
	}
}
