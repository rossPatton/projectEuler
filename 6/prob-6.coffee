# so concise!
# coffee prob-6.coffee
do ->
	'use strict'
	sum = 0
	sumSq = 0

	for i in [1..100] by 1
		sum += i
		sumSq += (i*i)

	console.log("The Sum Square Difference is: " + ( (sum*sum) - sumSq))
