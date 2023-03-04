// JavaScript Document
$(function () {
  $(".section-advantage__txt1,.section-advantage__txt2").on("inview", function () {
    $(this).addClass("is-inview");
  });
});
