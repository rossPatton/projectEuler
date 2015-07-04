# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

# ruby prob-4-paindromes.rb
# solution: 698896

# gets all palindromes in range
def palindrome(num)
	results = []

	until num == 99
		str = (num * num).to_s
		if str === str.reverse
			results.push(str)
		end

		num -= 1
	end

	results
end

p palindrome(999)[0].to_i
