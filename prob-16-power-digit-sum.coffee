#
# @reference https://projecteuler.net/problem=16
# @desc 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
# @problem What is the sum of the digits of the number 2^1000?
#

do ->
  "use strict"
  # get num, convert to str, remove decimal
  pow = Math.pow(2, 1000).
        toString().
        replace('.', '')
  # remove scientific notation, turn into arr we can loop over
  powArr = pow.substr(0, pow.indexOf('e')).
        split('')

  # final result
  sum = 0

  # loop through cleaned array, add up all numbers
  for num in [0..powArr.length-1] by 1
    sum += parseInt(powArr[num])

  console.log 'power digit sum is: ' + sum