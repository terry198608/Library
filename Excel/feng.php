<?php
    require_once 'Excel/reader.php';
    header("Content-type:text/html;charset=utf-8");
    error_reporting(E_ALL ^ E_NOTICE);
    $data = new Spreadsheet_Excel_Reader();
    $data->setOutputEncoding('utf-8');
    $data->read('file/22.xls');
    $str = '';
    for ($i = 1; $i <= $data->sheets[0]['numRows']; $i++) {
        for ($j = 1; $j <= $data->sheets[0]['numCols']; $j++) {
            $value = $data->sheets[0]['cells'][$i][$j];
            if($value>0) {
                $value = str_replace(',', '', $value);
                $value = str_replace('.', '', $value);
                $str .= $value/10000 ."\t";
            } else if($$value == '') {
                $str .= "\t";
            } else if($$value == '—') {
                $str .= "-\t";
            }
        }
        $str .= "\n";
    }
    $filename = 'file/feng_r.xls';
    exportExcel($filename, $str);
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