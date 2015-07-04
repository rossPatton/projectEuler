<?php

	function fibz($limit) {
		$fibo = [0];
		$i = 1;
		$value = 0;

		while ($value < $limit) {

			if ( $i === 0 || $i === 1 ) {
				$value = $i;
			}
			else {
				$value = $fibo[$i-2] + $fibo[$i-1];
			}

			if ( $value < $limit ) {
				array_push( $fibo, $value );
			}

			$i++;
		}

		return calcEvens($fibo);
	}

	function calcEvens($fibo) {
		$len = sizeof($fibo);
		$i = 0;
		$sum = 0;

		for ( $i; $i <= $len; $i++ ) {
			if ( $fibo[$i] % 2 ) {
				$sum += $fibo[$i];
			}
		}

		return $sum;
	}

	echo fibz(4000000);

?>
