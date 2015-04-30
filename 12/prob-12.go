/**
 * @reference https://projecteuler.net/problem=12
 * @problem What is the value of the first triangle number to have over five hundred divisors?
 * @solution 125250
 * go run prob-12.go
*/

package main
import "fmt"

func main() {
	divs := 500
	tri := (divs * (divs + 1) / 2)
	fmt.Println(tri)
}
