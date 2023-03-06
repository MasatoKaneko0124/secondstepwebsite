// JavaScript Document
$(function(){
  $('#submit_btn').on('click', function(){
    let isEmpty = false;
    jQuery('#form_name, #form_email, #form_title, #form_message').each(function(){
      if(jQuery(this).val() === ''){
        alert('必須項目が入力されていません！');
        $(this).focus();
        isEmpty = true;
        return false;
      }
    });
    if(isEmpty)
      return false;
  });
});

