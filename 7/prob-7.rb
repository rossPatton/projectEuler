# @reference https://projecteuler.net/problem=7
# @description By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
# @problem What is the 10,001st prime number?
# @solution 104743
# ruby prob-7.rb

require 'Prime'

class GetPrimes
	@primes = [2]

	def self.isPrime(num)
		# man, this is so much terser than the js equivalent
		2.upto( Math.sqrt(num).to_i ) do |div|
			return false if num % div == 0
		end
	end

	def self.nthPrime(goal)
		i = 3

		until @primes.length == goal
			if self.isPrime(i) then @primes.push(i) end
			i += 1
		end

		@primes.last
	end
end

p GetPrimes.nthPrime(10001)

# much much shorter alternative using stdlib Prime Class
p Prime.first(10001).last
