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

// toggle menu on click
$('.js-nav__toggle, a[href^="#"]').click(function () {
  $('.nav__menu').toggleClass('is-active');
});

/**
  * Scroll to Element
  */
function scrollTo(el) {
  var $el = $(el);
  console.log($el);
  $('html, body').animate({
    scrollTop: $el.offset().top - 50
  }, 300);
}

$('a[href^="#"]').click(function (e) {
  e.preventDefault();
  let id = $(this).attr('href');
  try { scrollTo(id); } catch (error) {}
});
