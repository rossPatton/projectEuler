# https://projecteuler.net/problem=2

# Each new term in the fibsnacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

# By considering the terms in the fibsnacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

# ruby prob-2.rb

def fibs()
	fibs = [0,1,1]

	while fibs[ fibs.length - 1 ] < 4000000
		fibs.push( fibs[fibs.length - 1] + fibs[fibs.length - 2] )
	end

	calcEvens(fibs)
end

def calcEvens(fibs)
	len = fibs.length - 1
	sum = 0

	while len > 0
		if ( fibs[len] % 2 ) === 0
			sum += fibs[len]
		end
		len = len - 1
	end

	puts sum
end

fibs()
