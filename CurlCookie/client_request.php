<?php

//取出cookie，一起提交给服务器，让服务器以为是浏览器打开登陆页面
$cookie_jar = dirname(__FILE__)."/pic.cookie";
$url = "http://www.test.com/Library/CurlCookie/server_request.php";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_jar);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$ret = curl_exec($ch);
curl_close($ch);

echo $ret;