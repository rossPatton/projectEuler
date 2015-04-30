# @reference https://projecteuler.net/problem=9
# @description There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# @problem Find the product abc.
# @solution a 200 plus b 375 plus c 425 equals 1000
# ruby prob-9.rb

def pythy()
	sum = 1000

	1.upto( sum / 3 ) do |a|
		( a + 1 ).upto( sum / 2 ) do |b|
			c = sum - a - b

			if a*a + b*b == c*c
				puts "a: #{a} plus b: #{b} plus c: #{c} equals #{sum}"
			end
		end
	end
end

pythy()
