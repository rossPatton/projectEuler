<?php

  $i = 0;
  $results = [];

  for ($i; $i < 999; $i++) {
    $temp = $i * $i;

    if ( strval($temp) == strrev(strval($temp)) ) {
      array_push($results, $temp);
    }
  }

  echo "Biggest 3 digit palindrome is: " . $results[count($results) - 1] . "\n";

?>