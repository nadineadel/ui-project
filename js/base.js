$(document).on('click', '.main-slider .slick-dots button', function() {
  $('.main-slider .slick-dots button.active').removeClass("active")
  $(this).addClass("active")
});

$(document).on('click', '.switch-clients-slider', function() {
  $('.switch-clients-slider.active').removeClass("active")
  $(this).addClass("active")
});

$(document).ready(function(){
  $('.main-slider, .all-quotes').slick({
    dots: true
  });
  $('.main-slider .slick-dots button').eq(0).addClass("active")
  $('.clients .slick-dots button').eq(0).addClass("active")
});

$('.main-slider, .all-quotes').on('swipe', function(){
  console.log($(this).closest('li').index())
});

$(document).on('click', '.clients .slick-dots button', function() {
  $('.clients .slick-dots button.active').removeClass("active")
  $(this).addClass("active")
  index = $(this).closest('li').index()
  $('.client-image').removeClass("active")
  $('.client-image').eq(2 - index).addClass("active")
});

$(document).on('click', '.client-image', function() {
  $('.clients .slick-dots button.active').removeClass("active")
  index = $(this).closest('.client-image-container').index()
  $('.clients .slick-dots button').eq(2 - index).addClass("active")
  $('.client-image').removeClass("active")
  $(this).addClass("active")
});