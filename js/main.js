$(function () {
    $('#ham').click(function () {
        const $headerActive = $('#header-active');
        if ($headerActive.hasClass('open')) {
            $headerActive.removeClass('open');
            $headerActive.fadeOut();
            $('header').removeClass('header-bgc');
            $('#fv-change').removeClass('fv-hide');
            $('#ham-first').css('transform', 'rotate(0)').css('top', '0px');
            $('#ham-second').css('display', 'block');
            $('#ham-third').css('transform', 'rotate(0)');
        } else {
            $headerActive.addClass('open');
            $headerActive.fadeIn();
            $('header').addClass('header-bgc');
            $('#fv-change').addClass('fv-hide');
            $('#ham-first').css('transform', 'rotate(45deg)').css('top', '7px');
            $('#ham-second').css('display', 'none');
            $('#ham-third').css('transform', 'rotate(-45deg)');
        }
    })
});
