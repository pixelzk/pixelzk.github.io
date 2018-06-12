$(document).ready(function() {
  // $('.flexslider1').flexslider({
  //   animation: 'slide',
  // });
  // var ad = $('.navbar');
  // var height = ad.height();
  // var wechatheight = $('#wecaht').height() + $('#wechat').offset().top;
  // // console.log(wechatheight);
  // window.onscroll = function() {
  //   var _top = document.body.scrollTop || document.documentElement.scrollTop; //兼容
  //   if (_top >= height) {
  //     ad.addClass('fixed');
  //     if (_top > wechatheight) {
  //       $('#menuopenbtn').fadeIn('fast');
  //     }
  //   } else {
  //     $('#menuopenbtn').fadeOut('fast');
  //     ad.removeClass('fixed');
  //   }
  // };
  $('#menuopenbtn').click(function() {
    $('.nav').slideDown('fast');
  });
  $('#menuclosebtn').click(function() {
    $('.nav').slideUp('fast');
  });

  // $('.nav_btn_g a').click(function() {
  //   var id = '#' + $(this).data('link');
  //   // console.log(id);
  //   var offset = $(id).offset();
  //   var bh =$('.navbar').height() ;
  //   if (offset) {
  //     $('html,body').animate({ scrollTop: $(id).offset().top - bh  }, 400);
  //   }
  //   $('.nav').slideUp('fast');
  //   return false;
  // });
});
