let body = $('body');

body.on('keypress click', '.nav__open', function(e) {
  if (e.which === 13 || e.type === 'click') {
    e.preventDefault();
    $('.nav__list').addClass('active');
    $('.header__logo').addClass('hidden');
    $('.nav__open').addClass('hidden');
    return false;
  }
});

body.on('keypress click', '.nav__close', function(e) {
  if (e.which === 13 || e.type === 'click') {
    e.preventDefault();
    $('.nav__list').removeClass('active');
    $('.header__logo').removeClass('hidden');
    $('.nav__open').removeClass('hidden');
    return false;
  }
});
