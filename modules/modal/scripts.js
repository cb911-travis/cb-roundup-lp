$('.modal').click(function (e) {
  $(this).fadeOut(40);
  e.preventDefault();
});

$('.modal__form').click(function(e){
  e.stopPropagation(); //stop this child element from triggering parent element functions
});

$('[data-target]').click(function(){
  let id = $(this).data('target');
  $(`#${id}`).fadeIn(70);
});
