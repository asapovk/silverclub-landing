;
// Начинать писать отсюда!!!!

$(document).ready(function(){
  var menu = $('.header__menu');
  $('.header__burger').on('click', function(){
    $(this).toggleClass('active');
    menu.toggleClass('show');
  })
});
