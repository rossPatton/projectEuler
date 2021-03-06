# @reference https://projecteuler.net/problem=7
# @description By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
# @problem What is the 10,0001st prime number?
# @solution 142915828925
# ruby prob-7.rb

def isPrime(num)
	# man, this is so much terser than the js equivalent
	2.upto( Math.sqrt(num).to_i ) do |div|
		return false if num % div == 0
	end
end

def getPrimes(limit)
	i = 3
	primes = [2]

	while primes[primes.length - 1] < limit
		if isPrime(i) != false
			primes.push(i)
		end

		i += 1
	end

	return getSum(primes)
end

def getSum(arr)
	return arr.reduce(:+)
end

puts getPrimes(2000000)
