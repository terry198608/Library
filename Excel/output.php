<?php
require_once 'Excel/reader.php';

define('FU', '#'); //负号替代字符串(负数在读取excel数据时存在问题，所以用这个代替)

// ExcelFile($filename, $encoding);
$data = new Spreadsheet_Excel_Reader();

header("Content-type:text/html;charset=utf-8");
// Set output Encoding.
$data->setOutputEncoding('utf-8');
//$data->setUTFEncoder('mb');
$data->read('file/2015.10.xls');
//var_dump($data->sheets[0]['cells'][5][5]);exit;
error_reporting(E_ALL ^ E_NOTICE);
$str = '';
$index = 22;
$total_order = array();//最后生成总账
for ($i = 1; $i <= $data->sheets[0]['numRows']; $i++) {
//    for ($j = 1; $j <= $data->sheets[0]['numCols']; $j++) {
//        $value = $data->sheets[0]['cells'][$i][$j];
        $row_value = $data->sheets[0]['cells'][$i];
        //带攀枝花的不处理
        if(strstr($row_value[2], '攀枝花') !== false){
            continue;
        }
        $t = $row_value[1]; //读取到的值
        if((int)$t <= 0){ //如果不为时间,则数据为不需要处理的数据
            //总款依然要处理
            if(strstr($row_value[9], FU) !== false && str_replace(FU,"",$row_value[9]) > 0) {
                //回款日期
                $t = $row_value[10]; //读取到的值
                $n = intval(($t - 25569) * 3600 * 24); //转换成1970年以来的秒数
                $month2 = gmdate('m', $n); //月
                $day2 = gmdate('d', $n); //日
                $str .= "\t".$index."\t".$month2."\t".$day2."\t".$row_value[2]."回款\t现金\t\t".str_replace(FU,"",$row_value[9])
                ."\n\t".$index."\t".$month2."\t".$day2."\t".$row_value[2]."回款\t应收账款\t".$row_value[2]."\t\t".str_replace(FU,"",$row_value[9])."\n";
                $index++;
            }
            continue;
        }
        
        $str .= "\t"; 
        $str .= $index."\t"; //凭证号
        $n = intval(($t - 25569) * 3600 * 24); //转换成1970年以来的秒数
        $month = gmdate('m', $n); //月
        $day = gmdate('d', $n); //日
        $str .= $month."\t"; 
        $str .= $day."\t"; 
        if(strstr($row_value[3], '调价') !== false){ //如果为调价,单独处理
            $p = $row_value[2]. //商家
                $row_value[3]. //型号
                '('.$row_value[4].')*'. //颜色
                $row_value[5]."\t"; //数量
                $str .= $p;
        } else {
            if(strstr($row_value[5], FU) !== false) { //正数为出,负数为退
                $row_value[5] = str_replace(FU,"",$row_value[5]);
                $p = $row_value[2].'退'. //商家
                $row_value[3]. //型号
                $row_value[4].' '. //颜色
                $row_value[5].'*'. //数量
                $row_value[6]."\t"; //单价
                $str .= $p;
            } else {
                $p = '出'.
                $row_value[2]. //商家
                $row_value[3]. //型号
                $row_value[4].' '. //颜色
                $row_value[5].'*'. //数量
                $row_value[6]."\t"; //单价
                $str .= $p;
            }
        }
        if(strstr($row_value[7], FU) !== false) {
            $total_price = '-'.str_replace(FU,"",$row_value[7]);
        } else {
            $total_price = $row_value[7];
        }
        $str .= "应收账款\t";
        $str .= $row_value[2] . "\t";
        $str .= $total_price . "\t";
        $str .= "\t";
        
        //生成第二行数据
        $str .= "\n\t".$index."\t".gmdate('m', $n)."\t".gmdate('d', $n)."\t".$p."主营业务收入\t\t\t".$total_price;
        $index++;
        //凭证(最后生成)
        //为负数时才处理
//        echo $row_value[2].'|'.$row_value[9].'---';
        if(strstr($row_value[9], FU) !== false) {
            //回款日期
            $t = $row_value[10]; //读取到的值
            $n = intval(($t - 25569) * 3600 * 24); //转换成1970年以来的秒数
            $month1 = gmdate('m', $n); //月
            $day1 = gmdate('d', $n); //日
            $str .= "\n\t".$index."\t".$month1."\t".$day1."\t".$row_value[2]."回款\t现金\t\t".str_replace(FU,"",$row_value[9])
            ."\n\t".$index."\t".$month1."\t".$day1."\t".$row_value[2]."回款\t应收账款\t".$row_value[2]."\t\t".str_replace(FU,"",$row_value[9]);
            $index++;
        }
//    }
    $str .= "\n";
    
    
}
    $filename = 'file/origin.xls'; 
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