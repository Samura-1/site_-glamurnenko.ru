$(window).on('scroll', function(){
if ( $(window).scrollTop() > 850 ) {
  $('.site-navigation,  .header').addClass('navbar-fixed');
} else {
  $('.site-navigation,  .header').removeClass('navbar-fixed');
}
});