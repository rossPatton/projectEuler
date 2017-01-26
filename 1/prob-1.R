# https://projecteuler.net/problem=1

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# Rscript prob-1.R

# @solution 233168

# initialize am empty vector
nums <- vector( mode='numeric', length=0 )

for ( i in 1:999 ) {
	if ( i %% 3 == 0 || i %% 5 == 0 ) {
		nums <- c(nums, i)
	}
}

# solution for the actual problem
print( Reduce('+', nums) )


# for funsies, create a bar chart of fizz buzz
# there's definitely a better way to do this im sure
fizz <- vector( mode='numeric', length=0 )
buzz <- vector( mode='numeric', length=0 )
fizzbuzz <- vector( mode='numeric', length=0 )
notFizz <- vector( mode='numeric', length=0 )

for ( i in 1:999 ) {
	if ( i %% 3 == 0 && i %% 5 == 0 ) {
		fizzbuzz <- c(fizzbuzz, i)
	}
	else if ( i %% 3 == 0 ) {
		fizz <- c(fizz, i)
	}
	else if ( i %% 5 == 0 ) {
		buzz <- c(buzz, i)
	}
	else {
		notFizz <- c(notFizz, i)
	}
}

fizzChart <- c( length(fizz), length(buzz), length(fizzbuzz), length(notFizz) )
names( fizzChart ) <- c( 'Fizz', 'Buzz', 'FizzBuzz', 'Other' )

# creates the barchart and puts it at ./fizzbuzz.gif
png( 'fizzbuzz.png',
	width     = 1200,
	height    = 1200,
	units     = "px",
	res       = 72
)

barplot( fizzChart, main='Fizz Distribution',
	ylab='Number of Occurences' )
dev.off()
