<?php
class Dir
{
public static function traverse($path = '.') {
                $current_dir = opendir($path);    //opendir()返回一个目录句柄,失败返回false
                while(($file = readdir($current_dir)) !== false) {    //readdir()返回打开目录句柄中的一个条目
                    $sub_dir = $path . DIRECTORY_SEPARATOR . $file;    //构建子目录路径
                    if($file == '.' || $file == '..') {
                        continue;
                    } else if(is_dir($sub_dir)) {    //如果是目录,进行递归
                        echo 'Directory ' . $file . ':<br>';
                        traverse($sub_dir);
                    } else {    //如果是文件,直接输出
                        echo 'File in Directory ' . $path . ': ' . $file . '<br>';
                    }
                }
            }
}