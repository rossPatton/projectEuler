// bonus version using nodejs workers to bubbleSort 50 arrays at the same time
// node --harmony bubbleSort.js

const arr = [4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17,4123,96,86,68,57,8,3,7,37,3,83,2,19,97, 9,17,48,96,86,68,5,82,63,70,37,34,83,27,19,97, 9,17,48,96,86,68,57,82,63,70,37,34,83,27,19,97, 4,17];

// @TODO have the workers suicide when their job is done
(function() {
	'use strict';
	const cluster = require('cluster');

	// master process
	if (cluster.isMaster) {
		for (let i = 0; i < 50; i++) {
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

}())