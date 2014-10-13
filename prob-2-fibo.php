<?php

	// $fibo = [];

	function fibonacci($limit) {
		$fibo = [0];
		$i = 1;
		$value = 0;

		for ($i; $i <= 50; $i++) {

			if ($i == 0 || $i == 1) {
				$value = $i;
			}
			else {
				$value = $fibo[$i-2] + $fibo[$i-1];
			}

			if ($value < $limit) {
				array_push($fibo, $value);
			}

		}

		calcEvens($fibo);
	}

	function calcEvens($fibo) {
		$len = sizeof($fibo);
		$i = 0;
		$sum = 0;

		for ($i; $i <= $len; $i++) {
			if (($fibo[$i] % 2)) {
				$sum += $fibo[$i];
			}
		}

		echo($sum . "\n");
	}

	fibonacci(4000000);

?>