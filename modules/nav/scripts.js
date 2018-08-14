/**
 * Sticky Nav on Scroll
 */
(function () {
  var nav = $('.nav').offset();

  if ($(window).scrollTop() >= nav.top) {
    $("body").addClass("stuck");
  } else {
    $("body").removeClass("stuck");
  }


  $(window).scroll(function () {
    if ($(window).scrollTop() >= nav.top) {
      $("body").addClass("stuck");
    } else {
      $("body").removeClass("stuck");
    }
  });

//  var scroll = new SmoothScroll('a[href*="#"]', {
//    offset: 50
//  });

})();

$('a[href^="#"]').click(function(e){
  e.preventDefault();
});

// toggle menu on click
$('.js-nav__toggle').click(function () {
  $('.nav__menu').toggleClass('is-active');
});
