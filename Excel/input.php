<?php
require_once 'Excel/reader.php';

define('FU', '#'); //负号替代字符串(负数在读取excel数据时存在问题，所以用这个代替)
define('INPUT_FILE_PATH', 'file/2016.01/');
define('INCLUDE', 1); //是否包含攀枝花
header("Content-type:text/html;charset=utf-8");
error_reporting(E_ALL ^ E_NOTICE);
$str = '';
//入库数据
$input_result = input();
$str .= $input_result['str'];
////出库数据
$output_result = output($input_result['index']);
$str .= $output_result['str'];
//工资
//$salary_result = salary($output_result['index']);
//$str .= $salary_result['str'];

$filename = 'file/result.xls';
exportExcel($filename, $str);

/**
 * 入库
 */
function input() {
    $data = new Spreadsheet_Excel_Reader();
    $data->setOutputEncoding('utf-8');
    $data->read(INPUT_FILE_PATH.'input.xls');
    $str = '';
    $index = 1;
    for ($i = 1; $i <= $data->sheets[0]['numRows']; $i++) {
        $row_value = $data->sheets[0]['cells'][$i];
        $t = $row_value[1]; //读取到的值
        $n = intval(($t - 25569) * 3600 * 24); //转换成1970年以来的秒数
        $month = gmdate('m', $n); //月
        $day = gmdate('d', $n); //日
        $t_price = $row_value[9]; //回款
        $real_t_price = str_replace(FU,"",$t_price);
        $cost_price = $row_value[7]; //成本金额
        $real_cost_price = str_replace(FU,"",$cost_price);
        $t_date = $row_value[10]; //回款日期
        $t_n = intval(($t_date - 25569) * 3600 * 24); //转换成1970年以来的秒数
        $t_month = gmdate('m', $t_n); //回款-月
        $t_day = gmdate('d', $t_n); //回款-日
        $company_name = $row_value[2]; //商家
        $product = $row_value[3]; //型号
        $color = $row_value[4]; //颜色
        $num = str_replace(FU,"",$row_value[5]);; //数量
        $each_price = $row_value[6]; //单价
        if((int)$t <= 0){ //如果不为时间,则数据为不需要处理的数据
            //回欠款依然要处理
            if(strstr($t_price, FU) !== false) {
                //回款日期
                $str .= "\t".$index."\t".$t_month."\t".$t_day."\t付前欠".$company_name."货款\t应付账款\t".$company_name."\t".$real_t_price
                ."\n\t".$index."\t".$t_month."\t".$t_day."\t付前欠".$company_name."货款\t现金\t\t\t".$real_t_price."\n";
                $index++;
            }
            continue;
        }
    
        $str .= "\t"; 
        $str .= $index."\t"; //凭证号
        $str .= $month."\t"; 
        $str .= $day."\t";
        //如果成本金额为负数
        if(strstr($cost_price, FU) !== false) {
            $str .= "从". $company_name."退".$product.$color.' '.$num .'*'.$each_price ."\t库存商品\t\t-".$real_cost_price;
            //生成第二行数据
            $str .= "\n\t".$index."\t".$month."\t".$day."\t"."从". $company_name."退".$product.$color.' '.$num.'*'. 
                $each_price ."\t"."应付账款\t".$company_name."\t\t-".$real_cost_price;
        } else {
            $str .= "从". $company_name."购入".$product.$color.' '.$num .'*'.$each_price ."\t库存商品\t\t".$real_cost_price;
            //生成第二行数据
            $str .= "\n\t".$index."\t".$month."\t".$day."\t"."从". $company_name."购入".$product.$color.' '.$num.'*'. 
                $each_price ."\t"."应付账款\t".$company_name."\t\t".$real_cost_price;
        }
        $index++;
        //回欠款
        if(strstr($t_price, FU) !== false) {
            $str .= "\n\t".$index."\t".$t_month."\t".$t_day."\t付前欠".$company_name."货款\t应付账款\t".$company_name."\t".$real_t_price
                ."\n\t".$index."\t".$t_month."\t".$t_day."\t付前欠".$company_name."货款\t现金\t\t\t".$real_t_price;
            $index++;
        }
         
        $str .= "\n";
    }
    return array('index'=>$index, 'str'=>$str);
}

/**
 * 出库
 */
function output($index) {
    $data = new Spreadsheet_Excel_Reader();
    $data->setOutputEncoding('utf-8');
    $data->read(INPUT_FILE_PATH.'output.xls');
    $str = '';
    for ($i = 1; $i <= $data->sheets[0]['numRows']; $i++) {
            $row_value = $data->sheets[0]['cells'][$i];
            $t = $row_value[1]; //读取到的值
            $n = intval(($t - 25569) * 3600 * 24); //转换成1970年以来的秒数
            $month = gmdate('m', $n); //月
            $day = gmdate('d', $n); //日
            $t_price = $row_value[9]; //回款
            $real_t_price = str_replace(FU,"",$t_price);
            $cost_price = $row_value[7]; //成本金额
            $real_cost_price = str_replace(FU,"",$cost_price);
            $t_date = $row_value[10]; //回款日期
            $t_n = intval(($t_date - 25569) * 3600 * 24); //转换成1970年以来的秒数
            $t_month = gmdate('m', $t_n); //回款-月
            $t_day = gmdate('d', $t_n); //回款-日
            $company_name = $row_value[2]; //商家
            $product = $row_value[3]; //型号
            $color = $row_value[4]; //颜色
            $num = $row_value[5]; //数量
            $each_price = $row_value[6]; //单价
            
            //带攀枝花的不处理
            if(strstr($row_value[2], '攀枝花') !== false){
//                continue;
            }
            if((int)$t <= 0){ //如果不为时间,则数据为不需要处理的数据
                //总款依然要处理
                if(strstr($t_price, FU) !== false) {
                    //回款日期
                    $str .= "\t".$index."\t".$t_month."\t".$t_day."\t".$company_name."回款\t现金\t\t".$real_t_price
                    ."\n\t".$index."\t".$t_month."\t".$t_day."\t".$company_name."回款\t应收账款\t".$company_name."\t\t".$real_t_price."\n";
                    $index++;
                }
                continue;
            }
            
            $str .= "\t"; 
            $str .= $index."\t"; //凭证号
            $str .= $month."\t"; 
            $str .= $day."\t"; 
            if(strstr($product, '调价') !== false){ //如果为调价,单独处理
                if(strstr($cost_price, FU) !== false) { //正数为出,负数为退
                    $pre_real_cost_price = '-'.$real_cost_price;
                } else {
                    $pre_real_cost_price = $real_cost_price;
                }
                $p = $company_name. //商家
                    $product. //型号
                    '('.$color.')*'. //颜色
                    $num."\t"; //数量
                    $str .= $p;
            } else {
                if(strstr($cost_price, FU) !== false) { //正数为出,负数为退
                    $pre_real_cost_price = '-'.$real_cost_price;
                    $num = str_replace(FU,'',$num);
                    $p = $company_name.'退'. //商家
                    $product. //型号
                    $color.' '. //颜色
                    $num.'*'. //数量
                    $each_price."\t"; //单价
                    $str .= $p;
                } else {
                    $pre_real_cost_price = $real_cost_price;
                    $p = '出'.
                    $company_name. //商家
                    $product. //型号
                    $color.' '. //颜色
                    $num.'*'. //数量
                    $each_price."\t"; //单价
                    $str .= $p;
                }
            }

            $str .= "应收账款\t";
            $str .= $company_name . "\t";
            $str .= $pre_real_cost_price . "\t";
            $str .= "\t";
            
            //生成第二行数据
            $str .= "\n\t".$index."\t".$month."\t".$day."\t".$p."主营业务收入\t\t\t".$pre_real_cost_price;
            $index++;
            //凭证(最后生成)
            //为负数时才处理
            if(strstr($t_price, FU) !== false) {
                $str .= "\n\t".$index."\t".$t_month."\t".$t_day."\t".$company_name."回款\t现金\t\t".$real_t_price
                ."\n\t".$index."\t".$t_month."\t".$t_day."\t".$company_name."回款\t应收账款\t".$company_name."\t\t".$real_t_price;
                $index++;
            }
        $str .= "\n";
    }
    return array('index'=>$index, 'str'=>$str);
}


/**
 * 工资
 */
function salary($index) {
    $data = new Spreadsheet_Excel_Reader();
    $data->setOutputEncoding('utf-8');
    $data->read(INPUT_FILE_PATH.'salary.xls');
    $str = '';
    for ($i = 1; $i <= $data->sheets[0]['numRows']; $i++) {
        $row_value = $data->sheets[0]['cells'][$i];
        $current_month = date('m');
        $current_day = date('d');
        $salary = $row_value[9]; //应发工资
        $real_salary = $row_value[14]; //实发工资
        $not_finish = $row_value[10]; //重点未完成扣款
        $return = $row_value[11]; //返款应扣
        $case = $row_value[12]; //皮套费用
        $lor = $row_value[13]; //贷存
        $role = $row_value[4]; //职位
//        $type = $row_value[15]; //类型
        $name = $row_value[2]; //职员名称
        
        $repeat_str = "\t".$index."\t".$current_month."\t".$current_day."\t".'支付'.$role.$name.$current_month."月份工资\t";
        $str .= $repeat_str; 
        
        //如果没有任何扣款
//        if(!$not_finish && !$return && !$case && $lor) {
            $str .= "营业费用\t工资\t".$salary."\n";
            //如果有贷存
            if($lor) {
                $str .= $repeat_str."其他应付款\t贷存--".$name."\t\t".$lor."\n";
            }
            //如果有皮套费用
            if($case) {
                $str .= $repeat_str."营业费用\t礼品费\t".$case."\n";
            }
            //重点未完成扣款
            //TODO 如何处理
            if($case) {
                
            }
            $str .= $repeat_str. "现金\t\t\t".$real_salary."\n";
//        }
        
        
        $index++;
    }
    return array('index'=>$index, 'str'=>$str);
}

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