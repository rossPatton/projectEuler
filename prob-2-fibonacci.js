/*
https://projecteuler.net/problem=2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

// node --harmony prob-2-fibonacci.js


// make this re-usable, add memoization
;(function() {
	'use strict';

	function fibonacci(limit) {
		var i = 0,
			fibo = [],
			value = 0;

		// this is dumb
		for (i; i < 50; i++) {
			if (i === 0 || i === 1) {
				value = i;
			} else if (fibo[i-1] < limit) {
				value = fibo[i-2] + fibo[i-1];
			}

			fibo.push(value);
		}

		calcEvens(fibo);
	}

	function calcEvens(fibo) {
		let len = fibo.length,
				sum = 0;

		while (len--) {
			if ((fibo[len] % 2) === 0) {
				sum += fibo[len];
			}
		}

		console.log(sum);
	}

	fibonacci(4000000);

}());