var full = false;

function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}



window.setInterval(function(){

    var enteredText = $("#inputPostOrSearch").val();
    var numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;
    var characterCount = enteredText.length + numberOfLineBreaks;

    if(characterCount == 50 && !full)
    {
        $('#saySomething').prepend(
            '<img class="img-responsive" src="sprites/maxLength.png" alt="Chania" id="maxLength">'
        );

        full = true;
    }
    else if(characterCount<50)
    {

        $('#maxLength').remove();

        full = false;

    }

}, 100);