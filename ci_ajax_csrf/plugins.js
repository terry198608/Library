$(function(){
// Add csrf token to ajax requests
// @link http://api.jquery.com/extending-ajax/
// @link http://aymsystems.com/ajax-csrf-protection-codeigniter-20/
$.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
// Only when post
if (options.type == "POST") {
//console.log("ajaxPrefilter");
//console.log("options", options);
//console.log("originalOptions", originalOptions);
var cct = $.cookie('csrf_admin_cookie');
//console.log('csrf_cookie', cct);
if (cct && (cct.length > 0) && (options.data.indexOf('csrf_admin_token=') == -1)) {
options.data += '&csrf_admin_token='+cct
}
}
});
});