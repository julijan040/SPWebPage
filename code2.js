var full = false;
var canChangeProfPictue = true;
var canAddPictureToPost = true;

function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}
$(document).ready(function() {

    //for detecting errors in pictures For Profile picture
    $("#changePic").change(function() {

        var val = $(this).val();

        switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
            case 'gif': case 'jpg': case 'png':
            if(!canChangeProfPictue)
            {
                $('#cantChangeProfPic').remove();
            }
            //let changing of ProfilePictureBegin
            break;
            default:
                $(this).val('');
                if(canChangeProfPictue)
                {
                    $('#chanePicDiv1').append(
                        '<img class="img-responsive" src="sprites/notAnImage.png" alt="Chania" id="cantChangeProfPic">'
                    );
                    canChangeProfPictue=false;
                }


                break;
        }
    });

    //for detecting errors in pictures For Post picture
    $("#Attach").change(function() {

        var val = $(this).val();

        switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
            case 'gif': case 'jpg': case 'png':
            if(!canAddPictureToPost)
            {
                $('#cantChangePostPic').remove();
            }
            //let changing of ProfilePictureBegin
            break;
            default:
                $(this).val('');
                if(canAddPictureToPost)
                {
                    $('#postAttachDiv').append(
                        '<img class="img-responsive" src="sprites/notAnImage.png" alt="Chania" id="cantChangePostPic">'
                    );
                    canAddPictureToPost=false;
                }


                break;
        }
    });

});

window.setInterval(function(){

    var enteredText = $("#inputPostOrSearch").val();
    var numberOfLineBreaks = (enteredText.match(/\n/g)||[]).length;
    var characterCount = enteredText.length + numberOfLineBreaks;

    if(characterCount == 250 && !full)
    {
        $('#saySomething').prepend(
            '<img class="img-responsive" src="sprites/maxLength.png" alt="Chania" id="maxLength">'
        );

        full = true;
    }
    else if(characterCount<250)
    {

        $('#maxLength').remove();

        full = false;

    }

}, 100);
