$(document).ready(function() {

    //sliding navigation
    $('a[href*=#]').each(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname
            && this.hash.replace(/#/,'') ) {
            var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
            var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
            if ($target) {
                var targetOffset = $target.offset().top;

            //move
                $(this).click(function() {
                    $("#nav li a").removeClass("active");
                    $(this).addClass('active');
                    $('html, body').animate({scrollTop: targetOffset}, 1000);
                    return false;
                });
            }
        }
    });

    $('.form-control').keypress(function() {

        var textLength = $(this).val().length;

        if(textLength < 20) {
            // Do noting
        } else if (textLength < 40) {
            $(this).css('font-size', '85%');
        } else if (textLength > 40) {
            $(this).css('font-size', '70%');
        }
    });

    jQuery('.form-control').fitText();


});

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});