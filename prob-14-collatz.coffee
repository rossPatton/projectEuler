# @reference https://projecteuler.net/problem=14
# @problem Which number, under one million, has the longest collatz chain?

present = require('present')

do ->
  'use strict'
  start = present()
  seq = []
  max = 1000001

  collatz = () ->
    # 'pointer' to n. we operate on n, i is just used to keep track of our index
    n = 1
    i = n

    # keep going til we reach the max num
    while i isnt max
      # track length of sequence
      len = 0

      # if n isn't 1 then the sequence isn't over
      while n isnt 1
        # if even divide by 2
        if n % 2 is 0
          n = n / 2
        # if odd multiply
        else
          n = (3 * n) + 1

        # increment length of sequence
        len++

        # very very very very important for perf.
        # if num is < index (10 < 13), we can calc the length immediately
        # by grabbing n's length from our array and ending the loop
        # this saves a ton of calc time on big nums (would timeout otherwise)
        if n < i
          len = len + seq[n - 1]
          break

      # i only add 1 cause you're supposed to count the starting num i guess
      seq.push(len)

      # increments our num and our pointer.
      i++
      n = i

    getLargestIndex()

    return seq

  getLargestIndex = () ->
    max = seq[0]
    index = 0

    for i in [1..seq.length] by 1
      if seq[i] > max
        index = i
        max = seq[i]

    console.log 'Longest seq is: ' + (max + 1) + ' when including start num'
    console.log 'Num with longest sequence is: ' + index
    console.log 'op took: ' + (present() - start) + ' ms'

  collatz()


  # this is a super cool one liner that does the same thing
  # as getLargestIndex... but fails on big nums
  # console.log seq.indexOf(Math.max.apply( Math, seq ))