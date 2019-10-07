$('document').ready(function() {
    let body = $('body');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    /**
     * svg
     */
    activate('img.svg');

    function activate(string) {
        $(string).each(function(){
            let $img = $(this);
            let imgID = $img.attr('id');
            let imgClass = $img.attr('class');
            let imgURL = $img.attr('src');

            $.get(proxyurl + imgURL, function(data) {
                let $svg = $(data).find('svg');

                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }

                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }, 'xml');
        });
    }

    /**
     * menu
     */

    body.on('keypress click', '.nav__open', function(e) {
        if (e.which === 13 || e.type === 'click') {
            e.preventDefault();
            $('.nav__list').addClass('active');
            $('.header__logo').addClass('hidden');
            $('.nav__open').addClass('hidden');
            body.addClass('overflow-hidden');
            return false;
        }
    });

    body.on('keypress click', '.nav__close', function(e) {
        if (e.which === 13 || e.type === 'click') {
            e.preventDefault();
            $('.nav__list').removeClass('active');
            $('.header__logo').removeClass('hidden');
            $('.nav__open').removeClass('hidden');
            body.removeClass('overflow-hidden');
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
