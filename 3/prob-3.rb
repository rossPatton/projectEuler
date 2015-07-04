# https://projecteuler.net/problem=3
# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?
# ruby prob-3.rb
# solution: 6857 of [ 71, 839, 1471, 6857 ]


class Factor
	@result = []

	def self.it(num)
		root = Math.sqrt(num)
		f = 3

		# divide root by increasing numbers until
		# one doesnt cleanly divide
		if num % 2 != 0
			while num % f != 0 and f < root
				f = f + 2
			end
		end

		# if no factor found then num is prime
		# we know we've got a factor if num is less than the square root
		f = f <= root ? f : num
		@result.push(f) # push latest prime factor

		# keep goin til we've hit our original number
		f === num ? @result.max : it(num/f)
	end
end

p Factor.it(600851475143)
