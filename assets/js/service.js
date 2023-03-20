// JavaScript Document
/*** 固定ヘッダー位置調整 ***/
$(window).on('load', function() {
    var headerHight = 80; //ヘッダの高さ
    if(document.URL.match("#")) {
    var str = location.href ;
    var cut_str = "#";
    var index = str.indexOf(cut_str);
    var href = str.slice(index);
    var target = href;
    var position = $(target).offset().top - headerHight;
    $("html, body").scrollTop(position);
    return false;
  }
});