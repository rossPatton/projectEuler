
# https://projecteuler.net/problem=1

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# ruby prob-1-fizzbuzz.rb


$sum = 0

1.upto(1000) do |i|
	if i % 3 == 0 or i % 5 == 0
		$sum += i
	end
end

puts $sum