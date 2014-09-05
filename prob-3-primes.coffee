# present = require('present')

# do ->
#   'use strict'

#   getPrimes = (max) ->
#     start = present()

#     i = 2
#     j = max
#     count = 0
#     primes = []
#     sieve = []

#     while count < 10001
#       if sieve[i] isnt true
#         j = i * 2
#         primes.push(i)
#         count++
#         for j in [j..max] by i
#           sieve[j] = true

#     end = present()
#     console.log('operation took: ' + (end - start) + ' ms.')
#     console.log(primes[primes.length-1])
#     return primes

#   getPrimes(100)