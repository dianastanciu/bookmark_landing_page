$('document').ready(function() {
    let body = $('body');

    /**
     * menu
     */

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


    /**
     * accordion
     */

    $('#accordion').accordion({
        heightStyle: 'content',
        collapsible: true,
        active: false,
        classes: {
            'ui-accordion-header-active': 'active',
            'ui-accordion-content': '',
        },
        icons: false,
    });

    /**
     * form validation
     */

    let form  = $('form');
    let email = $('#mail');
    let error = $('.error');

    $('form button[type="submit"]').on('click', function(event) {
        $('form').validate();

        if (email.valid()) {
            error.text('');
            error.addClass('error');
        }
    });
    $('form').on('submit', function (event) {
        $('form').validate();
        if (!email.valid()) {
            error.text("I expect an e-mail, darling!");
            error.addClass('error active');
            event.preventDefault();
        }
    });
});
