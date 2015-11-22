var passDoNotMatch = false;

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

    $('#confirmPass').on('input', function() {
        var val = $('#pass').val();

        if(val != $('#confirmPass').val() && !passDoNotMatch)
        {
            $('#register1').append(
                '<img class="img-responsive" src="sprites/passDoNotMatch.png" alt="Chania" id="cantRegister">'
            );
            passDoNotMatch=true;
        }
        else if(passDoNotMatch && val == $('#confirmPass').val())
        {
            $('#cantRegister').remove();
            passDoNotMatch=false;
        }
    });

    $('#pass').on('input', function() {
        var val = $('#confirmPass').val();

        if(val != $('#pass').val() && !passDoNotMatch)
        {
            $('#register1').append(
                '<img class="img-responsive" src="sprites/passDoNotMatch.png" alt="Chania" id="cantRegister">'
            );
            passDoNotMatch=true;
        }
        else if(passDoNotMatch && val == $('#pass').val())
        {
            $('#cantRegister').remove();
            passDoNotMatch=false;
        }
    });






});

$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});




