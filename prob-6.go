/**
 * @reference https://projecteuler.net/problem=6
 *
 */

package main

import "fmt"

func main() {
	sum := 0;
	sumSq := 0;

	for i := 1; i <= 100; i++ {
		sum += i;
		sumSq += (i*i)
	}

	fmt.Println("The Sum Square Difference is: ", (sum*sum) - sumSq )
}