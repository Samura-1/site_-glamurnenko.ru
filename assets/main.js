$(window).on('scroll', function(){
if ( $(window).scrollTop() > 850 ) {
  $('.site-navigation,  .header').addClass('navbar-fixed');
} else {
  $('.site-navigation,  .header').removeClass('navbar-fixed');
}
});

$(document).ready(function(){
 $('.btn_up').click(function(){
  $('body').animate({'scrollTop': 0}, 500);
  $('html').animate({'scrollTop': 0}, 500);
 });
});