/*

Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

iojs --harmony_arrow_functions prob-22.js

*/

'use strict';

const fs = require('fs');
const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S' ,'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const names = fs.readFileSync('p022_names.txt').toString();
const namesArr = names.split(',').sort();

let totals = [];

namesArr.forEach((name, i) => {
	const nameArr = name.split('');
	let total = 0;

	nameArr.forEach(ltr => total += alpha.indexOf(ltr) + 1 );

	total = total * (i + 1);

	return totals.push(total);
});

const answer = totals.reduce((prev, curr) => {
	return prev + curr;
});

console.log( answer );
