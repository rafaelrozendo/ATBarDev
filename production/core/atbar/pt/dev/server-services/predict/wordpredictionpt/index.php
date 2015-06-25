<?php
header('Content-Type: application/json; charset=utf-8');
error_reporting(0);

if(isset($_GET['l'], $_GET['t']) == FALSE){
	echo json_encode(array("error" => "not enough arguments specified"));
} else {
	$leading = $_GET['l'];
	$trailing = $_GET['t'];

	$command = escapeshellcmd('python script.py "' . $leading . '"');
	$data = shell_exec($command);

	$response = json_encode(array("status" => "OK", "payload" => $data));

	if(isset($_GET['callback'])){
		echo $_GET['callback'] . "(" . $response . ");";
	} else {
		echo $response;
	}
}


?>