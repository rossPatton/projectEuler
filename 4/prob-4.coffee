do ->
	'use strict'
	upperLimit = 999
	result = []

	reverse = (s) ->
		return s.split('').reverse().join('')

	for i in [0..upperLimit] by 1
		temp = i*i
		if temp.toString() is reverse(temp.toString())
			result.push temp

	return console.log result[result.length-1]
