<?php
session_start();
require 'lib/Error.php';

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>批量替换文件名称</title>
</head>
<body>
  <form action="process.php" method="post" enctype="multipart/form-data">
  <table>
    <tr>
      <td>Excel文件(zip)</td>
      <td><input type="file" name="excel_file" /></td>
    </tr>
    <tr>
      <td>要替换名称文件(zip)</td>
      <td><input type="file" name="data_file" /></td>
    </tr>
  </table>
    <input type="submit" value="确认提交" />
  </form>
  <div style="color: red">
    <?php $error = Error::getError();?>
    <?php foreach ($error as $e) { ?>
      <div><?php echo $e; ?></div>
    <?php } Error::ClearError(); ?>
  </div>
</body>
</html>