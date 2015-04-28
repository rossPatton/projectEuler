// @reference https://projecteuler.net/problem=20
// @desc n! means n × (n − 1) × ... × 3 × 2 × 1
//          For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
//          and the sum of the digits in the number
//          10!is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// @problem Find the sum of the digits in the number 100!
// @answer  6584096534400

package main
import (
	"fmt"
	// "math/big"
)


// for i in [num..1] by -1
//   #     if i is 1
//   #       break

//   #     num *= i - 1

//   #   return num

func factorial(num int) int {

	for i:= num; i >= 1; i-- {

		if i == 1 {
			break
		}

		num = num * (i - 1)
	}

	return num
}


// func factorialSum(num big.Int) int {
//   fmt.Println(num)

//   for i:= num; i >= 1; i-- {

//     if i == 1 {
//       break
//     }

//     num = num + (i - 1)
//   }

//   return num
// }


func main() {
	fmt.Println(factorial(10))
	// fmt.Println(factorialSum(factorial(100)))
}
