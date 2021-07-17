$(function(){


// メニューをクリックするとスクロール
// $('.nav_menu li a').click(function(){
//   var href =$(this).attr('href');
//   var position = $(href).offset().top;
//   $('html, body').animate({'scrollTop': position}, 400);
//   return false;
// });


  // バーガーメニュー
  $("#show").click(function () {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('#nav_wrapper').removeClass('active');
      $("html,body").css("overflow", "visible");
      return false;
    }else{
      $(this).addClass('active');
      $('#nav_wrapper').addClass('active');
      $("html,body").css("overflow", "hidden");
      return false;
    }
  });

  $('#nav_menu_wrapper ul li a').click(function(){
    $("#show").removeClass('active');
    $('#nav_wrapper').removeClass('active');
    $('body,html').css('overflow', 'visible');
  });

  $('#nav_wrapper').click(function(){
    $("#show").removeClass('active');
    $('#nav_wrapper').removeClass('active');
    $('body,html').css('overflow', 'visible');
  });

  $(window).scroll(function(){
  if($(this).scrollTop()>600){
    $('#to_top').fadeIn(500);
  }else{
    $('#to_top').fadeOut(500);
  }
  });

  //「topへ戻る」ボタンを押すとtopから0の地点へスクロールする
  $('#to_top').click(function(){ 
    $('html,body').animate({'scrollTop':0},500);
    return false;
  });





















});