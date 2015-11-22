$(document).ready(function() {
    $("#inputPostOrSearch").maxlength({max: 100});
});

function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}