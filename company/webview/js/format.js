document.write('<link rel="stylesheet" type="text/css" href="css/common.css" />');


$(function(){
    $("img").each(function(i){
        str = $(this).attr("src");
        
        if(str.indexOf("emotion")>=0) {
            img_src_array = str.split("/");
            img_name = img_src_array[img_src_array.length-1];
            img_name_array = img_name.split(".");
            pre_img_name = img_name.replace(img_name_array[img_name_array.length-1], "");
            $(this).attr("src", "file:///android_asset/emoji/"+pre_img_name+"png");
            $(this).addClass("_emotion");
        } else {
            $(this).addClass("img_area");
            width = $(this).attr("img_width");
            height = $(this).attr("img_height");
            max_width = $(window).width();
            if(max_width < width) {
                width = max_width;
                if(height > 0) {
                    height = height * max_width / $(this).attr("img_width");
                }
            }
            $(this).wrap("<div style='width:"+width+"px;height:"+height+"px' class='imgBgcolor'></div>");
            $(this).load(function(){
                $(this).parent().removeClass("imgBgcolor");
                $(this).parent().removeAttr("style");
            })
            $(this).unbind("click").click(function(){
                $(this).attr("src", $(this).attr("src"));
            })
            $(this).error(function(){
                $(this).parent().html("");
            })
        }
    })
});