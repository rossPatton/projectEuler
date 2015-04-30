do ->
	'use strict'
	getTriNum = (divs) ->
		triNum = (divs * (divs + 1)) / 2
		return triNum

	console.log getTriNum(5)
