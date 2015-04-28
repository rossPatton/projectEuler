<?php

	// not working? @FIXME

	$arr = range(1, 20);
	$isDivis = true;
	$remainder = true;
	$num = 1;
	$i = 0;

	// print_r('$count'($arr));

	while($remainder) {
		// echo "test" . "\n";

		for ($i; $i < count($arr); $i++) {
			// echo $i . "\n";
			// echo $num . "\n";
			echo $num % $arr[$i] . "\n";
			echo $isDivis . "\n";

			if ($num % $arr[$i] !== 0) {
				echo "is true";
				$remainder = false;

				echo "Smallest multiple is " . $num;
				return;
				// echo "inside if" . "\n";
				// $isDivis = false;
				// break;
			}
		}

		// if ($isDivis === true) {
		//   echo "is true";
		//   $remainder = false;

		//   echo "Smallest multiple is " . $num;
		//   return;
		// }

		$num++;

	}

// ?>
