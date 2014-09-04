do ->
  "use strict"
  sum = 1000

  for a in [1..(sum/3)] by 1
    for b in [(a+1)..(sum/2)] by 1
      c = (sum - a - b)
      if ((a*a) * (b*b) == (c*c))
        console.log('a plus ' + a + ' b ' + b + ' c ' + c + ' equals ' + (a + b + c))
        return