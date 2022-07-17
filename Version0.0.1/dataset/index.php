<?php

if(isset($_GET["Username"]))
{

    $username = $_GET["Username"];
    $buffer_file = $username . '.txt';

    if (file_exists($buffer_file)) {
        $buffer = fopen($buffer_file, 'r') or die('');
        $buffer_data = stream_get_contents($buffer);
        
        echo $buffer_data;
    }
}

?>