<?php


$json = file_get_contents('php://input');

$request2 = json_decode($json);
$request = json_decode($json, true);

//echo $json;

if($request2->data->platformInfo->platformUserHandle)
{
	$myfile = fopen($request2->data->platformInfo->platformUserHandle . ".txt", "w") or die("");
	fwrite($myfile, $json);
	fclose($myfile);
	
	echo $json;
}

//echo $request->data->platformInfo->platformUserHandle;



//echo $json;

?>