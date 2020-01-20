$(document).ready(function () {

  $('li').mouseenter(
  function () {
    $(this).find('.drop-menu').fadeIn();
    $(this).children('a').addClass('link-active');
  })
$('li').mouseleave(
  function () {
    $(this).find('.drop-menu').fadeOut();
    $(this).children('a').removeClass('link-active');
  })
});
