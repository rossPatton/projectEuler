/*
https://projecteuler.net/problem=3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

// node --harmony prob-3-primes.js


// this is not finished, could be much better, pieced together from my own work and examples of other solutions i found online

(function() {
	'use strict';

	var result = [],
			x;

	primeFactorization(600851475143)

	function primeFactorization(num){
	  var root = Math.sqrt(num),
			  result = arguments[1] || [],  //get unnamed paremeter from recursive calls
			  x = 2;

	  // console.log(result)

	  //if not divisible by 2
	  if (num % x) {
	  	//assign first odds
	  	x = 3;

	  	console.log(num % x)
	  	while( (num % x) && ((x = x + 2) < root) ) {
		  	// iterates through odds up to root
	  	}
	  }

	  // if no factor found then num is prime
	  if ( !(x <= root)) {
	  	x = num;
	  }

	  result.push(x);//push latest prime factor

	  console.log(result);

	  if (x !== num) {
	  	primeFactorization(num/x, result)
	  } else {
	  	return;
	  }

	  //if num isn't prime factor make recursive call
	  // return (x === num) ? result : primeFactorization(num/x, result) ;
	}

}());