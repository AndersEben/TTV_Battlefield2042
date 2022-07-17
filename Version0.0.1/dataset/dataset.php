<?php

$buffer_file = 'JustinOnTop02.txt';

$buffer = fopen($buffer_file, 'r+b');
$buffer_data = stream_get_contents($buffer);

echo $buffer_data;

?>