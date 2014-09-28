present = require('present')

do ->
  'use strict'
  upperLimit = 4000000
  fibo = []
  start = present()

  fibonacci = ->
    i = 1
    min = 0
    max = 500000
    value = 0

    for i in [min..max] by 1
      if i is 0 or i is 1
        value = i
      else
        if fibo[i-1] < upperLimit
          value = fibo[i-2] + fibo[i-1]

      fibo[i] = value

    calcEvens(fibo)


  calcEvens = (fibo) ->
    len = fibo.length
    sum = 0

    while len--
      if not(fibo[len] % 2)
        sum += fibo[len]

    console.log(sum)
    console.log 'op took: ' + (present() - start) + ' ms.'


  fibonacci()
