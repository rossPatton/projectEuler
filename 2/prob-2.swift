/*
https://projecteuler.net/problem=2

Each new term in the fibznacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the fibznacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

@solution 4613732
350704366

*/

func calcEvens(arr: [Int]) -> Int {
  let evens: [Int] = arr.filter({ $0 % 2 == 0 })
  let reduced: Int = evens.reduce(0, +)
  return reduced
}

func fibo(limit: Int) -> [Int] {
  var i = 0
  var j = 1
  var hitLimit = false
  var fibz: [Int] = [0]

  while hitLimit == false {
    if (i + j) > limit {
      hitLimit = true
      break
    }
    (i, j) = (j, i + j)
    fibz.append(j)
  }

  return fibz
}

let fibonacci = fibo(limit: 4000000)
let sum = calcEvens(arr: fibonacci)
print(fibonacci)
print(sum)
