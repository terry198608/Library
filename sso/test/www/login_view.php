<?php
session_start();
var_dump($_SESSION);exit;
$url = 'http://www.sso.com/';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">  
<html xmlns="http://www.w3.org/1999/xhtml">  
<head>  
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />  
 <title>单点登陆界面</title>  
</head>  
<body>  
<div class="view">  
<table style="width:600; height:333; border:1; align:center; cellpadding:4; bordercolor:#CCCCCC;">  
    <tr>  
    <td style="width: 50%;align:center;">  
            请输入登陆信息:  
    </td>  
        <td style="width: 50%;">  
            <div id="maincol" style="border: 1px solid #ccc;float: left;width: 400px;height: 219px; overflow: hidden;">  
                <iframe id="auth-login-iframe" name="auth-login-iframe" style="width:100%; height:100%; marginwidth:0; marginheight:0; frameborder:0; scrolling:no;" src="<?php echo $url.'login.php' ?>"></iframe>  
            </div>  
        </td>  
    </tr>  
  <tr>  
  <span style="white-space:pre"> </span><td><a href="<?php echo $url.'logout.php' ?>">登出</a></td>  
  </tr>  
</table>  
</div>  
</body>  
</html>  