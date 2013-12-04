<?php

class Dir
{
public static function replaceFile($path, $originName, $replaceName, $downloadPath) {
    $found_file = false;
    $fileDirUtil = new FileDirUtil();
                $current_dir = opendir($path);    //opendir()返回一个目录句柄,失败返回false
                
                while(($file = readdir($current_dir)) !== false) {    //readdir()返回打开目录句柄中的一个条目
                    $sub_dir = $path  . '/' . $file;    //构建子目录路径
                    $d_path = $downloadPath . $file . '/';
                    if($file == '.' || $file == '..') {
                        continue;
                    } else if(is_dir($sub_dir)) {    //如果是目录,进行递归
                        //echo 'Directory ' . $file . ':<br>';
                        //在下载目录创建目录
                        $fileDirUtil->createDir($d_path);
                        self::replaceFile($sub_dir, $originName, $replaceName, $d_path);
                    } else {    //如果是文件,直接输出
                        //echo 'File in Directory ' . $path . ': ' . $file . '<br>';
                        //找到文件进行替换
                        $fileName = self::get_file_name($file);
                        if ($fileName == $originName) { 
                            $found_file = true;
                            //替换目录并移动至下载目录
                            $fileExt = self::get_file_type($file);
                            $fileDirUtil->moveFile($path  . '/' . $file, $downloadPath . $replaceName . '.' . $fileExt);
                            return true;
                        }
                    }
                }

//                if ($found_file) {
//                    return true;
//                } else {
//                    return false;
//                }
                //如果没有找到excel中的文件
//                var_dump($found_file);
//                if (!$found_file) {
//                    //Error::addError('Excel中<font style="color:red">' . $originName . '</font>没有找到对应的图片!');
//                }
                
            }
            
public static function get_file_type($filename){

        $info = pathinfo($filename);
        $ext = $info['extension'];

        return $ext;

    }
public static function get_file_name($filename){

        $info = pathinfo($filename);
        $file_name = $info['filename'];

        return $file_name;

    }
            
	/**
	 * Detect upload file type
	 * 
	 * @param array $file        	
	 * @return bool $flag
	 */
	public static function detectUploadFileMIME($file) {
		// 1.through the file extension judgement 03 or 07
		$flag = 0;
		$file_array = explode ( ".", $file ["name"] );
		$file_extension = strtolower ( array_pop ( $file_array ) );
		
		// 2.through the binary content to detect the file
		switch ($file_extension) {
			case "xls" :
				// 2003 excel
				$fh = fopen ( $file ["tmp_name"], "rb" );
				$bin = fread ( $fh, 8 );
				fclose ( $fh );
				$strinfo = @unpack ( "C8chars", $bin );
				$typecode = "";
				foreach ( $strinfo as $num ) {
					$typecode .= dechex ( $num );
				}
				if ($typecode == "d0cf11e0a1b11ae1") {
					$flag = 1;
				}
				break;
			case "xlsx" :
				// 2007 excel
				$fh = fopen ( $file ["tmp_name"], "rb" );
				$bin = fread ( $fh, 4 );
				fclose ( $fh );
				$strinfo = @unpack ( "C4chars", $bin );
				$typecode = "";
				foreach ( $strinfo as $num ) {
					$typecode .= dechex ( $num );
				}
				if ($typecode == "504b34") {
					$flag = 1;
				}
				break;
		}
		
		// 3.return the flag
		return $flag;
	}
	
    public static function traverse($path = '.') {
                $current_dir = opendir($path);    //opendir()返回一个目录句柄,失败返回false
                while(($file = readdir($current_dir)) !== false) {    //readdir()返回打开目录句柄中的一个条目
                    $sub_dir = $path . DIRECTORY_SEPARATOR . $file;    //构建子目录路径
                    if($file == '.' || $file == '..') {
                        continue;
                    } else if(is_dir($sub_dir)) {    //如果是目录,进行递归
                        //echo 'Directory ' . $file . ':<br>';
                        self::traverse($sub_dir);
                    } else {    //如果是文件,直接输出
                        echo '未在excel中找到对应的替换内容!';
                        echo 'File in Directory ' . $path . ': ' . $file . '<br>';
                    }
                }
    }
	
}