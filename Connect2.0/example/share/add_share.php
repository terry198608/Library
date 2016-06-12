<?php

/*
 *调用接口代码
 *
 **/
require_once("../../API/qqConnectAPI.php");
$qc = new QC();
$ret = $qc->add_share($_GET);
var_dump($ret);exit;
?>
<meta charset="utf-8" />

<?php
if($ret['ret'] == 0){
    echo "分享成功";
}else{
    echo "分享失败";
}
?>
