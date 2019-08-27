let body = $('body');

body.on('click', '.nav__open', function() {
  $('.nav__list').addClass('active');
  $('.header__logo').addClass('hidden');
  $('.nav__open').addClass('hidden');
});

body.on('click', '.nav__close', function() {
  $('.nav__list').removeClass('active');
  $('.header__logo').removeClass('hidden');
  $('.nav__open').removeClass('hidden');
});
