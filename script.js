

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
     function() {
      $(this).toggleClass('hoverimg');
  });

  /*  var images = ["images/bg/pexels-photo-27403.jpg",
                  "images/bg/botbg.jpg"];

    function getRandomInt()
    {
      return Math.floor(Math.random() * images.length);
    };

    function nextBackground() {
      $(".banner").css("background-image", "url(" + images[getRandomInt()] +")");
    };
  setInterval(nextBackground, 4500); */

  $(document).ready(function(){
      $('body').mousemove(function(e){
         var x = -(e.pageX + this.offsetLeft) / 30;
          var y = -(e.pageY + this.offsetTop) / 30;
          $('.banner').css('background-position', x + 'px ' + y + 'px' );
          $('#prlx').css('background-position', x/2 + 'px ' + y/2 + 'px' );
      });
  });
