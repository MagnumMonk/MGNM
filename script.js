$(document).ready(function(){
    $("li").hide();
    $('.drop-panel').hover(function() {
        $('li').slideToggle(300);
    });
  });
  $('.bubble').hover(
     function(){
      $(this).toggleClass('hover');
  });

  $('.block-image').hover(
     function(){
      $(this).toggleClass('hoverimg');
  });
