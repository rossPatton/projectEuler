/*
https://projecteuler.net/problem=3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

// node --harmony prob-3-primes.js


// this is not finished, could be much better, pieced together from my own work and examples of other solutions i found online

const _ = require('./lib/lodash.min');

(function() {
	'use strict';


	function primeFactorization(num){
	  var root = Math.sqrt(num),
	  result = arguments[1] || [],  //get unnamed paremeter from recursive calls
	  x = 2;

	  if(num % x){//if not divisible by 2
	   x = 3;//assign first odd
	   while((num % x) && ((x = x + 2) < root)){}//iterate odds
	  }
	  //if no factor found then num is prime
	  x = (x <= root) ? x : num;
	  result.push(x);//push latest prime factor

	  //if num isn't prime factor make recursive call
	  return (x === num) ? result : primeFactorization(num/x, result) ;
	}


	function primeFactorization(num) {
	  var root = Math.sqrt(num),
        // keep result updated during recursion
			  result = arguments[1] || [],
			  x = 2;

	  // console.log(result)

	  // if not divisible by 2
	  if (num % x) {
	  	// assign first odds
	  	x = 3;

	  	while( (num % x) && (x < root) ) {
	  		x = x + 2;
	  	}
	  }

	  // if no factor found then num is prime
	  if ( !(x <= root)) {
	  	x = num;
	  }

	  result.push(x); // push latest prime factor

	  return (x === num) ? console.log(result[result.length-1]) : primeFactorization(num / x, result);
	}

  primeFactorization(600851475143);

}());