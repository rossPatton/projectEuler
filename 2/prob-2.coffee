present = require('present')

do ->
	'use strict'
	limit = 4000000
	start = present()

	fibonacci = ->
		i = 1
		value = 0
		fibo = [0]

		# for i in [1..50] by 1
		while value < limit
			if i is 1
				value = i
			else if fibo[i-1] < limit
				value = fibo[i-2] + fibo[i-1]

			# console.log value
			fibo.push(value)
			i++

		calcEvens(fibo)


	calcEvens = (fibo) ->
		len = fibo.length
		sum = 0

		while len--
			if fibo[len] % 2 == 0
				sum += fibo[len]

		console.log sum
		console.log 'op took: ' + (present() - start) + ' ms.'


	fibonacci()
