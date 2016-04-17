$(document).on('click', '.main-slider .slick-dots button', function() {
  $('.main-slider .slick-dots button.active').removeClass("active")
  $(this).addClass("active")
});

$(document).on('click', '.switch-clients-slider', function() {
  $('.switch-clients-slider.active').removeClass("active")
  $(this).addClass("active")
});

$(document).ready(function(){
  $('.main-slider').slick({
    dots: true
  });
  $('.main-slider .slick-dots button').eq(0).addClass("active")
});