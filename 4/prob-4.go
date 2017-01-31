/*
	A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

	Find the largest palindrome made from the product of two 3-digit numbers.
*/

// go run prob-4-paindromes.go

package main

import "fmt"
import "strconv"

func main() {
	result := []int {}
	upperLimit := 999

	for i := 0; i < upperLimit; i++ {
		tempNum := (i*i)
		if palindrome(strconv.Itoa(tempNum)) {
			result = append(result, tempNum)
		}
	}

	last := len(result) - 1 // really there has to be a better way
	fmt.Println("Biggest 3 digit palindrome is: ", result[last])
}

// helper funcs below i did not write, just reverses the string and returns true or false
// i didn't want to deal with boilerplate

// this returns true if string is a palindrome
func palindrome(s string) bool {
	return reverse(s) == s
}

// returns the reverse of a string (there is apparently no built in func for this in go)
func reverse(s string) string {
  orig:= string(s); // stingify our num
  length:= len(s); // get length of string
  n := make([]byte, length);

  for i := 0; i < length; i++ {
    n[length-i-1] = orig[i]
  }

  return string(n);
}
