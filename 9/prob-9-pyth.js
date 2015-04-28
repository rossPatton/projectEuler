/**
 * @reference https://projecteuler.net/problem=9
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

'use strict';
const present = require('present');
const start = present();
const sum = 1000; // upper limit, start here

let a = 1;

for (a; a <= (sum / 3); a++) {
// while (a <= (sum / 3)) {
	let b = (a + 1);

	// while (b <= (sum / 2)) {
	for (b; b <= (sum / 2); b++) {
		let c = sum - a - b;

		if ((a*a) * (b*b) === (c*c)) {
			let end = present();
			console.log('operation took: ' + (end - start) + ' ms');
			console.log('a plus ' + a + ' b ' + b + ' c ' + c + ' equals ' + (a + b + c));
			return;
		}
		// b++;
	}
	// a++;
}