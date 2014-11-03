# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.

# ruby prob-4-paindromes.rb

def palindrome()
  $i = 99
  $results = []

  until $i > 999
    if $i.to_s === $i.to_s.reverse
      $results.push($i * $i)
    end

    $i += 1
  end

  puts $results[$results.length - 1]

end


palindrome()