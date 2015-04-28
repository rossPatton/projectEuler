# @reference https://projecteuler.net/problem=10
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
# Find the sum of all the primes below two million.
# @solution 1999993

present = require('present')

do ->
	'use strict'

	getPrimes = (max) ->
		i = 2
		sieve = []
		primes = []

		for i in [i..max] by 1
			if sieve[i] isnt true and i isnt undefined
				j = i * 2
				primes.push(i)
				for j in [j..max] by i
					sieve[j] = true

		getSum(primes)
		return primes

	getSum = (primes) ->
		i = primes.length - 1
		sum = 0

		for i in [i..primes.length-1] by 1
			sum += primes[i]

		return console.log 'sum of primes: ' + sum

	start = present()
	getPrimes(2000000)
	end = present()

	return console.log('operation took: ' + (end - start) + ' ms.')
