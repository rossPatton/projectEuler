<!--
	https://projecteuler.net/problem=1

	If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

	Find the sum of all the multiples of 3 or 5 below 1000.

	php prob-1-fizzbuzz.php

 -->


<?php

	for ($i = 1; $i <= 1000; $i++) {
		if ($i % 15 == 0) {
			echo($i . " fizzbuzz\n");
		} else if (i % 3 == 0) {
			echo($i . " fizz\n");
		} else if (i % 5 == 0) {
			echo($i . " buzz\n");
		}
	}

?>