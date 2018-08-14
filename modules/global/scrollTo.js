function scrollTo(aid) {
  var aTag = $(aid);
  console.log(aTag);
  $('html,body').animate({
    scrollTop: aTag.offset().top - 50
  }, 300);
}

$('a[href^="#"]').click(function (e) {
  e.preventDefault();
  let id = $(this).attr('href');
  try { scrollTo(id); } catch (error) {}
});
