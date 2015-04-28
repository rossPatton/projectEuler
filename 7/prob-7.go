/**
 * @reference https://projecteuler.net/problem=7
 * @description By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * @problem What is the 10,0001st prime number?
 * @solution 104743
 * go run prob-7.go
*/

package main
import "fmt"
import "math"

func isPrime(num int) bool {
	limit := math.Ceil( math.Sqrt(float64(num) + 1) );
	div := 2;

	for div < int(limit) {
		if num % div == 0 {
			return false;
		}

		div++;
	}

	return true;
}

func main() {
	i := 3;
	primes := []int{2};

	for len(primes) < 10001 {
		if isPrime(i) != false {
			primes = append(primes, i);
		}

		i++;
	}

	fmt.Println( primes[len(primes) - 1] );
}
