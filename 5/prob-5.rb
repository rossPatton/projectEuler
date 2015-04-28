# @reference https://projecteuler.net/problem=5
# @description  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
# @problem What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
# @solution 232792560
# ruby prob-5.rb
# times out when the array gets bigger than 17? @FIXME

def multiples()
	arr = (1..10).to_a;
	len = arr.length - 1
	answerFound = false
	num = 1

	while answerFound === false
		isDivis = true

		for i in 1..len
			if num % arr[i] != 0
				isDivis = false
				break
			end
		end

		if isDivis === true
			answerFound = true
			puts num
			return
		end

		num += 1

	end

end


multiples()
