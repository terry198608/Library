<?php
require_once 'Excel/reader.php';


// ExcelFile($filename, $encoding);
$data = new Spreadsheet_Excel_Reader();


// Set output Encoding.
$data->setOutputEncoding('utf-8');

$data->read('shifu.xls');

error_reporting(E_ALL ^ E_NOTICE);

for ($i = 1; $i <= $data->sheets[0]['numRows']; $i++) {
	for ($j = 1; $j <= $data->sheets[0]['numCols']; $j++) {
		$value = $data->sheets[0]['cells'][$i][$j];
		//$value =str_replace(' ', '', $value);
		$value = strtolower($value);
		$value = preg_replace('/[\.\d]/','',$value);
		$value = ucwords($value);
		$str .= $value."\t"; 
	}
	$str .= "\n";

}
    $filename = date('Ymd').'.xls'; 
    exportExcel($filename,$str);
    
function exportExcel($filename,$content){ 
    header("Cache-Control: must-revalidate, post-check=0, pre-check=0"); 
    header("Content-Type: application/vnd.ms-execl"); 
    header("Content-Type: application/force-download"); 
    header("Content-Type: application/download"); 
    header("Content-Disposition: attachment; filename=".$filename); 
    header("Content-Transfer-Encoding: binary"); 
    header("Pragma: no-cache"); 
    header("Expires: 0"); 
 
    echo $content; 
} 