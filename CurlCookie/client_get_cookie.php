<?php

//必须使用绝对路径
$cookie_jar = dirname(__FILE__)."/pic.cookie";

//将cookie存入文件
$url = "http://www.test.com/Library/CurlCookie/server_get_cookie.php";
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_jar);
$content = curl_exec($ch);
curl_close($ch);

echo $content;