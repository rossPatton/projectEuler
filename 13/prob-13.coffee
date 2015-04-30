arr = require('../big-num-array')

do ->
	'use strict'
	sum = 0

	addNums = (arr) ->
		for i in [0..arr.length - 1] by 1
			sum += arr[i]

	addNums(arr)

	# the final num, converted to decimal, only the first 10 places
	return console.log(sum.toString().replace('.', '').slice(0, 10))
