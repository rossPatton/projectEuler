/**
 * @reference https://projecteuler.net/problem=7
 * @description By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * @problem What is the 10,0001st prime number?
 * @solution 104743
*/

'use strict';

// still hate primes, and math, but will come back to this later
const present = require('present');

function isPrime(num) {
	const limit = Math.ceil(Math.sqrt(num) + 1);
	let div = 2;

	while ( div < limit ) {
		if ( num % div === 0 ) {
			return false;
		}
		div++;
	}
}

function nthPrime(goal) {
	const start = present();
	let i = 3;
	let primes = [2];

	while ( primes.length < goal ) {
		if ( isPrime(i) !== false ) {
			primes.push(i);
		}

		i++;
	}

	console.log(`op took: ${present() - start} ms.`);
	return primes[primes.length - 1];
}

console.log( nthPrime(10001) );

// function nthPrime(goal) {
// 	const start = present();

// 	let n = 3;
// 	let prime = [2]; // 2 is our first prime

// 	// keep going til we hit 10001
// 	while (prime.length < goal) {
// 		let div = 3;
// 		let i = 1;
// 		let limit = Math.sqrt(n) + 1; // no point in iterating past sqrt
// 		let isPrime = true;

// 		while (div < limit) {
// 			if (n % div === 0) {
// 				isPrime = false;
// 				div = limit;
// 			} else {
// 				div = prime[i++] || div + 2;
// 			}
// 		}

// 		if (isPrime) {
// 			prime.push(n);
// 		}

// 		n += 2;
// 	}

// 	console.log('op took: ' + (present() - start) + ' ms.');
// 	return prime[prime.length - 1];
// }

// return console.log(nthPrime(10001));




// ;(function() {
// 	'use strict';

// 	function getPrimes(max) {
// 		const start = present();

// 		var i = 2,
// 				j = max,
// 				primes = [],
// 				sieve = [];


// 			The Sieve of Eratosthenes
// 			loop through our range. as we reach new numbers, mark their multiples off
// 			as they can no longer be prime. loop through (j) based on our new num (i)
// 			return only the numbers that haven't been marked off
// 			3 = prime, so therefore any multiples of 3 are no longer prime, etc

// 		for (i; i <= max; i++) {
// 	    if (!sieve[i]) {
// 	    	let j = i * 2;
// 	      primes.push(i);
// 	      for (j; j <= max; j += i) {
// 	        sieve[j] = true;
// 	      }
// 		  }
// 		}

// 		var end = present();
// 		console.log('operation took: ' + (end - start) + ' ms.')

// 		return primes;
// 	}

// 	console.log(getPrimes(50))
// }());


// i don't know why but i really hate prime nums, will come back to this

// ;(function() {
// 	'use strict';
// 	let arr = [],
// 			primeNotFound = true,
// 			i = 1,
// 			j = 1;

// 	while (primeNotFound) {
// 		if (i % 2 !== 0) {
// 			console.log(i + ' is odd');
// 			while (primeNotFound) {
// 				console.log( % j)
// 			}
// 		}
// 	// for (i; i <= 15; i++) {
// 	// 	console.log(i)
// 	// 	if (i % 2 !== 0) {
// 	// 		for (j; j <= 15; j++) {
// 	// 			console.log(j)
// 	// 			if (i % j === 0) {
// 	// 				// console.log(i)
// 	// 				// console.log(j)
// 	// 				console.log(i % j === 0)
// 	// 				// break;
// 	// 			} else {
// 	// 				// console.log(i + ' prime');
// 	// 				arr.push(i)
// 	// 			}
// 	// 		}
// 	// 	}

// 		i++;

// 		if (i === 15) { primeNotFound = false; }
// 	}

// 	console.log(arr)

// 	// console.log("The Sum Square Difference is: " + ( (sum*sum) - sumSq) );

// }());
