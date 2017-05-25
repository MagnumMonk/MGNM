$(document).ready(function(){
    $("li").hide();
    $('.drop-panel').hover(function() {
        $('li').slideToggle(300);
    });
  });
