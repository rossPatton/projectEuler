/**
 * @reference https://projecteuler.net/problem=5
 * @problem What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

// go run prob-5-smallest-multiple.go

package main

import (
	"fmt"
	"time" // for benchmarking
)

func main() {
	arr := []int {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,}
	length := len(arr)
	num := 1
	remExists := true
	start := time.Now()

	for remExists == true {
		isDivis := true

		for i := 1; i <= length; i++ {
			if num % i != 0 {
				isDivis = false
				break
			}
		}

		if isDivis == true {
			remExists = false
			fmt.Println(num)

			// golang completes this about 1000ms faster than js does
			fmt.Println("Operation took: ", time.Since(start))
			return
		}

		num++
	}
}
