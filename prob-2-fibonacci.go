/*
https://projecteuler.net/problem=2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

go run prob-2-fibonacci.go

*/

package main

import "fmt"

var fibo = []int {}

/*
	a recursive function would probs be better than a for loop that
	runs an arbitrary amount of times
*/
func main() {
	limit:= 4000000

	for i:= 0; i <= 50; i++ {
		if i == 0 {
			fibo = append(fibo, 1)
		} else if i == 1 {
			fibo = append(fibo, 2)
		} else {
			if fibo[i-1] < limit {
				temp:= fibo[i-1] + fibo[i-2]
				fibo = append(fibo, temp)
			} else {
				length := len(fibo)
				sum := 0

				for i:= 0; i < length; i++ {
					if (fibo[i] % 2) == 0 {
						sum += fibo[i]
					}
				}

				fmt.Println(sum)
				break
			}
		}
	}
}
