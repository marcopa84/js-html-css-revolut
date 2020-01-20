$(document).ready(function () {

  $('li').mouseenter(
  function () {
    $(this).find('.drop-menu').fadeIn();
  })
$('li').mouseleave(
  function () {
    $(this).find('.drop-menu').fadeOut();
  })
});
