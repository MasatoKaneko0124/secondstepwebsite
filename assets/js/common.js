// JavaScript Document
$(function () {

  /*** ナビゲーションメニュー ***/
  //1.
  $('.open-button').on("click", function () {
    $('.header nav').slideToggle();
    $('.overlay').slideToggle();
  });
  $('.open-button').on("click", function () {
    $(this).toggleClass('active');
  });
  $('.overlay').on("click", function () {
    $('.header nav').slideUp();
    $('.overlay').slideUp();
    $('.open-button').removeClass('active');
  });

  /*** スライダー（slick） ***/
  //https://kenwheeler.github.io/slick/
  $('#slick-slide1,#slick-slide2,#slick-slide3').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    infinite: true,
    dots: false,
    arrows: false,
    cssEase: 'linear'

  });

});
