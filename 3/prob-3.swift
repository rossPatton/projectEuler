/*
  https://projecteuler.net/problem=3
  The prime factors of 13195 are 5, 7, 13 and 29.
  What is the largest prime factor of the number 600851475143 ?
  solution: 6857 of [ 71, 839, 1471, 6857 ]
*/

import Darwin

var results: [Int] = Array()

func factor(num: Int) -> Int {
  let root = sqrt(Double(num))
  var f = 2

  // keep dividing up to square root
  // also a prime can't be even obvs
  if num % f != 0 {
    f = 3
    while num % f != 0 && Double(f) <= root {
      f = f + 2
    }
  }

  // if no factor found then num is prime
  f = Double(f) <= root ? f : num;
  results.append(f) // push latest prime factor

  // if done
  if (f == num) {
    print(results)
    return results.max()! // as? Int ? results.max() : 0
  }

  // else keep going until f and num equal each other
  return factor(num: num / f) ;
}

print( factor(num: 600851475143) );
