# ruby prob-6.rb

i = 100
sum = 0
sumSq = 0

while i >= 0
	sum += i;
	sumSq += ( i * i );
	i = i - 1
end

output = "The sum square diff is: " + ((sum*sum) - sumSq).to_s
p output
