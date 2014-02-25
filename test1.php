<?php
//$imageData = file_get_contents('./images/'.date('Ymd',time()).'/'.$pic[$url_num-1].'.jpg');
//$imageData = file_get_contents("php://input");
var_dump(file_get_contents("php://input"));exit;
$imageData = $_POST["data"];
$fp = fopen('c:/install/aa.jpg', 'w');
fputs($fp, $imageData);
echo $_POST['a'];
//header('Content-Type: image/jpg');
//echo $imageData;