/*
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.

  swift prob-4.swift
  solution: 698896
*/

func reverse(num: Int) -> String {
  let s = String(num)
  return String(s.characters.reversed())
}


func palindrome(limit: Int) -> Int {
  var i = limit

  while i != 0 {
    let product = i * i

    // if we start at our limit and go backwards, so the first match is the biggest
    if String(product) == reverse(num: product) {
      return product
    }

    i = i - 1
  }

  return limit
}

print("Biggest 3 digit palindrome is:", palindrome(limit: 999))
