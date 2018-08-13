// sticky nav on scroll
$(document).ready(function () {
  var nav = $('.nav').offset();

  if ($(window).scrollTop() >= nav.top) {
    $("body").addClass("stuck");
  } else {
    $("body").removeClass("stuck")
  }


  $(window).scroll(function () {
    if ($(window).scrollTop() >= nav.top) {
      $("body").addClass("stuck");
    } else {
      $("body").removeClass("stuck")
    }
  });

  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: 50
  });

});
