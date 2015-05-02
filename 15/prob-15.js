/**
 * @reference https://projecteuler.net/problem=15
 * @description  Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.
 * @problem How many such routes are there through a 20×20 grid?
 *
 * @solution
 * iojs prob-15.js
*/

'use strict';

// i basically just used the algo i found on wikipedia

function getRoutes(gridSize) {
	if ( typeof gridSize !== 'number' ) {
		return;
	}

	let routes = 1;

	for ( let i = 0; i < gridSize; i++ ) {
		routes *= (2 * gridSize) - i;
		routes = routes / ( i + 1 );
	}

	return routes;
}

console.log( getRoutes(20) );
