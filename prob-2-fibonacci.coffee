do ->
	'use strict'
  upperLimit = 4000000
  fibo = []

  fibonacci = ->
    i = 0
    for i in [0..50] by 1
      if i is 0 or i is 1
        fibo[i] = i
      else
        if fibo[i-1] < upperLimit
          fibo[i] = fibo[i-2] + fibo[i-1]

    calcEvens(fibo)

  calcEvens = (fibo) ->
    len = fibo.length
    sum = 0

    while len--
      if not(fibo[len] % 2)
        sum += fibo[len]

    console.log(sum)

  fibonacci()
