jQuery(document).ready(function ($) {


  $('.menu-button').click(function (e) {
    $('.menu').css('width', '250px');
    console.log('oui');
  });

  $('#close-menu').click(function (e) {
    $('.menu').css('width', '0px');
  });



});