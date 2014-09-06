/**
 * @reference https://projecteuler.net/problem=12
 * @problem What is the value of the first triangle number to have over five hundred divisors?
*/

;(function() {
	'use strict';

	/**
	 * Return triangle number with nth number of divisors
	 * @param  {int} divs [number of divisors final int will have]
	 * @return {int}      [final int]
	 */
	function getTriNum(divs) {
		var triNum = (divs * (divs + 1) / 2);
		console.log(triNum);
		return triNum;
	}

	getTriNum(500);
}());




// initial approach was dumb and very very very slow
// basically get list of all divisors, count them, and iterate
// ;(function() {
// 	'use strict';

// 	function getNthFactor(goal, int) {
// 		const start = present();

// 		var nthFound = false,
// 	  		quotient;

// 	  while (nthFound === false) {
// 	  	var j = 1,
// 	  			count = 0;

// 	  	for (j; j <= int; j++) {
// 		    quotient = int / j;

// 	    	/**
// 	    	 * micro optimization.
// 	    	 * math.floor is far more versatile, but we don't need it in this case
// 	    	 * bitwise use here gets us about 20%-25% faster
// 	    	 */
// 	    	// if (quotient === Math.floor(quotient)) {
// 		    // if (quotient === ~~(quotient)) {
// 	    	if (quotient === (quotient >> 0)) {
// 		      count++;
// 		      console.log(Math.sqrt(Math.sqrt(int)))
// 		      if (count === goal) {
// 		      	console.log(int);
// 		      	console.log('op took: ' + (start - present()) + ' ms.')
// 		      	nthFound = true;
// 		      	return int;
// 		      }
// 		    }
// 		  }

// 		  int++;
// 	  }

// 	  // return int;
// 	}

// 	// finds first number with 500 divisors
// 	// getNthFactor(64, 50000);
// }());