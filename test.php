<?php

    $fp=fopen('c:/test.jpg',"r");// $image['name']图片路径 ，我简单测试 放在根目录了，正式使用时请更换成正确的路径  
    $file=fread($fp,filesize('c:/test.jpg'));

    
    $url = "http://www.my_project.com/Library/test1.php";
  $post_data = array ("data" => $file, 'a'=>'aaa');

  $ch = curl_init();

  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  // post数据
  curl_setopt($ch, CURLOPT_POST, 1);
  // post的变量
  curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);

  $output = curl_exec($ch);
  curl_close($ch);

  //打印获得的数据
echo $output;


