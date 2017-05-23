$('.squote').hide();
$('.quotes').hover(
   function(){
    $(this).toggleClass('hover');
    $('.squote', this).slideToggle(300);
});
