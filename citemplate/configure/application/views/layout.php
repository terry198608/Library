<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name ="keywords" content="<?php echo $meta['keywords'];?>" />
        <meta name="Description" content="<?php echo $meta['description'];?>" />
        <title><?php echo $meta['title'];?></title>
        <?php foreach($css as $k => $v){?>
            <link rel="stylesheet" type="text/css" href="<?php echo base_url().'css/'.$v;?>" /> 
        <?php }?>
        <?php foreach($javascript as $kj => $vj){?>
            <script type="text/javascript" src="<?php echo base_url().'js/'.$vj;?>"></script>
        <?php }?>
    </head>
    <body>
         <?php echo $content_for_layout;?>
    </body>
</html>
