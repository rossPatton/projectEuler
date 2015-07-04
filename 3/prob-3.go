/*
	https://projecteuler.net/problem=3
	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number 600851475143 ?
	go run prob-3.go
	solution: 6857 of [ 71, 839, 1471, 6857 ]

	disclosure: took most of this from a tutorial
				changed a little bit, needs more work, but was useful to learn channels
*/

package main

import "fmt"
import "math"

func factor(num int, ch1 chan int) {
	root := int( math.Sqrt( float64(num) ) )
	ch1 <- 2
	if num % 2 != 0 {
		for i := 3; i <= root; i += 2 {
			ch1 <- i
		}
	}
	// signal that the limit is reached
	ch1 <- -1
}

// Copy the values from channel 'in' to channel 'out',
// removing those divisible by 'prime'.
func filter(in <-chan int, out chan<- int, prime int) {
	for i := <-in; i != -1; i = <-in {
		if i % prime != 0 {
			out <- i
		}
	}
	out <- -1
}

func factorize(num int) {
	results := []int{}
	ch1 := make(chan int)
	go factor(num, ch1)

	for prime := <-ch1; (prime != -1) && (num > 1); prime = <-ch1 {
		for num % prime == 0 {
			num = num / prime
			results = append(results, prime)
		}

		ch2 := make(chan int)
		go filter(ch1, ch2, prime)
		ch1 = ch2
	}

	fmt.Println( Max(results) )
}

func Max(vec []int) int {
	max := vec[0]

	for i := 1; i < len(vec); i++ {
		if vec[i] > max {
			max = vec[i]
		}
	}

	return max
 }

func main() {
	factorize( 600851475143 )
}
