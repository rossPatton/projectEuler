#
# @reference https://projecteuler.net/problem=18
#
# By starting at the top of the triangle below and moving to adjacent numbers on the row
# below, the maximum total from top to bottom is 23.
# 3
# 7 4
# 2 4 6
# 8 5 9 3
#
# @problem Find the maximum total from top to bottom of the triangle below:
# 75
# 95 64
# 17 47 82
# 18 35 87 10
# 20 04 82 47 65
# 19 01 23 75 03 34
# 88 02 77 73 07 63 67
# 99 65 04 28 06 16 70 92
# 41 41 26 56 83 40 80 70 33
# 41 48 72 33 47 32 37 16 94 29
# 53 71 44 65 25 43 91 52 97 51 14
# 70 11 33 28 77 73 17 78 39 68 17 57
# 91 71 52 38 17 14 91 43 58 50 27 29 48
# 63 66 04 68 89 53 67 30 73 16 69 87 40 31
# 04 62 98 27 23 09 70 98 73 93 38 53 60 04 23
#
# My approach will be to store each row as an array and compare
# each one array at a time, mapping out the highest num each time
# which i will then add up at the end
#
# @solution: 1313
#

_ = require('./lib/lodash.min')

do ->
  pyramid = {
    0: [75],
    1: [95, 64],
    2: [17, 47, 82],
    3: [18, 35, 87, 10],
    4: [20, 4, 82, 47, 65],
    5: [19, 1, 23, 75, 3, 34],
    6: [88, 2, 77, 73, 7, 63, 67],
    7: [99, 65, 4, 28, 6, 16, 70, 92],
    8: [41, 41, 26, 56, 83, 40, 80, 70, 33],
    9: [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
    10: [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
    11: [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
    12: [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
    13: [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
    14: [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
  }

  # @solution 1
  # nums taken to reach end.
  truePath = []
  # final result to return
  sum = 0

  # loop through the pyramid
  for key of pyramid
    # if key exists, get the largest num in the array
    if pyramid.hasOwnProperty(key)
      # with lodash
      max = _.max(pyramid[key])
      # push to new array
      truePath.push(max)

  # now that we have the correct path, add them up
  _.each truePath, (el, index) ->
    sum += truePath[index]

  console.log sum


  # @solution 2
  # alternatively, if we don't need to keep track of the path
  do ->
    sum = 0

    for key of pyramid
      if pyramid.hasOwnProperty(key)
        sum += _.max(pyramid[key])

    console.log 'alt: ' + sum


  # @solution 3
  # without lodash
  do ->
    sum = 0

    for key of pyramid
      if pyramid.hasOwnProperty(key)
        max = pyramid[key][0]

        for i in [0..pyramid[key].length-1] by 1
          if pyramid[key][i] > max
            max = pyramid[key][i]

        sum += max

    console.log 'alt 2: ' + sum


  # below returns the same as _.max but less concise