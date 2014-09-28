#
# @reference https://projecteuler.net/problem=20
#
# @desc n! means n × (n − 1) × ... × 3 × 2 × 1
#          For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
#          and the sum of the digits in the number
#          10!is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
#
# @problem Find the sum of the digits in the number 100!
# @answer  6584096534400
#

present = require('present')

do ->
  'use strict'

  f = []

  factorial = (num) ->
    if num is 1
      return 1

    if f[num] > 0
      return f[num]

    return f[num] = factorial(num - 1) * num


  factorialSum = (factor) ->
    fStr = factor.toString().replace('.', '')
    fArr = fStr.substr(0, fStr.indexOf('e')).split('')
    fSum = 0

    for i in [fArr.length - 1..0] by -1
      fSum += parseInt(fStr.charAt(i), 10)

    return fSum


  start = present()
  console.log factorialSum(factorial parseInt(100, 10))
  console.log 'op took: ' + (present() - start) + ' ms'



    # factorial = (num) ->
  #   for i in [num..1] by -1
  #     if i is 1
  #       break

  #     num *= i - 1

  #   return num