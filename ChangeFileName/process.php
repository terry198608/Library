<?php
session_start();
set_time_limit(0);
require 'lib/Error.php';
require 'lib/UploadFile.php';
require 'lib/Url.php';
require 'lib/Common.php';
require 'lib/pclzip.lib.php';
require 'lib/Dir.php';
require 'lib/Excel/reader.php';
require 'lib/FleDirUtil.php';
require 'lib/PhpZip.php';

//是否上传了文件
$excelFile = $_FILES['excel_file'];
$dataFile  = $_FILES['data_file'];
$fileNameExcel = $excelFile['name'];
$fileNameData = $dataFile['name'];

if (empty($fileNameExcel) || empty($fileNameData)) {
    Error::addError('请选择要上传的文件');
    Url::redirect('index.php');
}

$randString = Common::getRandString();
$savePath = 'C:\project\personal\my_project\Library\ChangeFileName\upload/' . $randString . '/';
$downloadPath = 'C:\project\personal\my_project\Library\ChangeFileName\dwonload/' . $randString . '/';

//上传excel文档
$uploadExcel = new UploadFile($savePath, 'excel', 'zip');
$uploadExcel->upload_file($excelFile);
if (!empty($uploadExcel->errmsg)) {
    Error::addError($uploadExcel->errmsg);
    Url::redirect('index.php');
}
//上传要替换名称的文件
$uploadData = new UploadFile($savePath, 'data', 'zip');
$uploadData->upload_file($dataFile);
if (!empty($upload_excel->errmsg)) {
    Error::addError($uploadData->errmsg);
    Url::redirect('index.php');
}

//解压缩文件
$zipExcel = new PclZip($savePath . 'excel.' . $uploadExcel->get_file_type($fileNameExcel));
$zipExcel->extract(PCLZIP_OPT_PATH, 'upload/' . $randString . '/excel');
$zipData = new PclZip($savePath . 'data.' . $uploadData->get_file_type($fileNameData));
$zipData->extract(PCLZIP_OPT_PATH, 'upload/' . $randString . '/data');

//遍历目录替换文件名
$data = new Spreadsheet_Excel_Reader();

// Set output Encoding.
$data->setOutputEncoding('UTF-8');
//获得excel文件名
$excelPath = $savePath . 'excel';
$current_dir = opendir($excelPath);    //opendir()返回一个目录句柄,失败返回false
while(($file = readdir($current_dir)) !== false) {    //readdir()返回打开目录句柄中的一个条目
    $sub_dir = $excelPath . DIRECTORY_SEPARATOR . $file;    //构建子目录路径
    if($file == '.' || $file == '..') {
        continue;
    } else if(is_dir($sub_dir)) {
            Error::addError('Excel替换文档错误,里面不应该存在文件夹!');
            Url::redirect('index.php');
        } else {
//            echo 'File in Directory ' . $excelPath . ': ' . $file . '<br>';\
            //判断文件是否为excel
            $excelFilePath = $excelPath . DIRECTORY_SEPARATOR . $file;
            $file_ext = $uploadExcel->get_file_type($file);
            if (!in_array($file_ext, array('xls', 'xlsx', 'csv'))) {
                Error::addError('Excel替换文档错误,上传的不是excel文件!');
                Url::redirect('index.php');
            }
            break;
        }
    }
$data->read($excelFilePath);
for ($i = 2; $i <= $data->sheets[0]['numRows']; $i++) {
    $originName  = $data->sheets[0]['cells'][$i][1];
    $replaceName = $data->sheets[0]['cells'][$i][2];
    //开始替换
    Dir::replaceFile($savePath . 'data/', $originName, $replaceName, $downloadPath);
//    if(!Dir::replaceFile($savePath . 'data/', $originName, $replaceName, $downloadPath)) {
//        Error::addError('Excel中<font style="color:red">' . $originName . '</font>没有找到对应的图片!');
//    }
}

//if (Error::hasError()) {
//    //删除生成的下载目录
//    Url::redirect('index.php');
//}

//将生成的文件打包下载
//$zip = new PhpZip();
//$zip->downloadZip($downloadPath,  $randString . '.zip');//自动下载 

Dir::traverse($savePath);
