# @reference https://projecteuler.net/problem=9
# @description There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# @problem Find the product abc.
# @solution a 200 plus b 375 plus c 425 equals 1000
# ruby prob-9.rb

do ->
	'use strict'
	sum = 1000

	for a in [1..(sum/3)] by 1
		for b in [(a+1)..(sum/2)] by 1
			c = (sum - a - b)
			if ((a*a) + (b*b) == (c*c))
				console.log('a ' + a + ' plus b ' + b + ' plus c ' + c + ' equals ' + (a + b + c))
				return
