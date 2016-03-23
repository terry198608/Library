$(function(){
    // Add csrf token to ajax requests
    // @link http://api.jquery.com/extending-ajax/
    // @link http://aymsystems.com/ajax-csrf-protection-codeigniter-20/
    $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        // Only when post
        if (options.type == "post") {
            // console.log("ajaxPrefilter");
            // console.log("options", options);
            // console.log("originalOptions", originalOptions);
            var cct = $.cookie('csrf_cookie_doniuren');
            //console.log('csrf_cookie', cct);
            if (cct && (cct.length > 0) && (options.data.indexOf('csrf_doniuren=') == -1)) {
                options.data += '&csrf_doniuren='+cct
            } else {
                
            }
        }
    });
});