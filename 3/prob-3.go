/*
	https://projecteuler.net/problem=3
	The prime factors of 13195 are 5, 7, 13 and 29.
	What is the largest prime factor of the number 600851475143 ?
	go run prob-3.go

	@TODO so this actually returns the correct answer
		  but then hangs for reasons i don't yet understand
*/

package main

import "fmt"
import "math"


// this one doesnt work yet


/*
	a recursive function would probs be better than a for loop that
	runs an arbitrary amount of times
*/
func main() {
	// fmt.Println(num)
	var result []int
	fmt.Println( primeFactors(600851475143, result) )
}

func primeFactors(num int, result []int) []int {
	root := math.Sqrt(float64(num))
	x := 2

	fmt.Println(root)

	// if not divisible by 2
	if num % x != 0 {
		 // assign first odd
		x = 3
		// keep dividing up to square root
		for num % x != 0 {
			if float64(x) < root {
				x = x + 2
			}
		}
	}

	if float64(x) > root {
		x = num
	}

	// fmt.Println("floated x", float64(x))
	// fmt.Println("x", x)
	// fmt.Println("num", num)
	// fmt.Println("num/x", num/x)
	// fmt.Println("root", root)
	// fmt.Println("num/x", num/x)

	// result = append(result, x) // push latest prime factor
	fmt.Println(result)

	// if num isn't prime factor make recursive call
	if x == num {
		return result
	} else {
		return primeFactors(num/x, result)
	}
}
