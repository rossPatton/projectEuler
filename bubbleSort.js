// bonus version using nodejs workers to bubbleSort 50 arrays at the same time
// node --harmony bubbleSort.js

const arr = [4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17];

const cluster = require('cluster'),
			present = require('present');

// @TODO have the workers suicide when their job is done
;(function() {
	'use strict';

	let i = 0,
			start = present();

	// master process
	if (cluster.isMaster) {
		for (i; i < 50; i++) {
			cluster.fork();
		}
	} else if (cluster.isWorker) {
		let len = arr.length - 1,
				sorted = arr;

		while (len--) {
			let j = len + 1;
			while (j < arr.length) {
				if (arr[len] > arr[j]) {
					sorted[len] = [arr[j], arr[j] = sorted[len]][0]; // destructuring
				}
				j ++;
			}
		}

		console.log(process.pid + ' has sorted the arr!');
	}

	cluster.on('online', function(worker) {
		console.log('worker ' + worker.process.pid + ' is online');
	});

	let end = present();
	console.log('sort took: ' + (end - start) + ' ms.');

}())

// ;(function() {
// 	'use strict';

// 	const start = present();
// 	let end;

// 	// this forces it to actually compare the num and not convert them to strings first
// 	arr.sort(function(a, b) {
//     return a - b;
// 	});

// 	end = present();
// 	console.log('sort took: ' + (end - start) + ' ms.');
// 	// console.log(arr)
// }());