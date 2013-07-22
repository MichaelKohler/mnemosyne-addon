var keyWords = ["war", "tornado", 'typhoon', 'disaster'];
var _re = "";
for(i=0;i<keyWords.length;i++) {
    if ((i+1) == keyWords.length) {
        _re += '\\b' + keyWords[i] + '\\b';
    }
    else {
        _re += '\\b' + keyWords[i] + '\\b|';
    }
}

//console.log("Using RegEx: " + _re);

var re = RegExp(_re, "gi");

// DOM Text
var text = $('body').text();


if (re.test(text)) {
    //console.log("KeyWord found");
    var bar = $("<div/>");
    var p = $("</p>");
    var a = $("<a/>");
    // Button style from: http://www.lab.tommasoraspo.com/simple-web-buttoms/
    a.attr("href", "#");
    a.text("Submit all the Images");
    a.css("display", "inline-block");
    a.css("text-decoration", "none");
    a.css("font", "bold 12px/12px HelveticaNeue, Arial");
    a.css("padding", "4px 7px");
    a.css("color", "#555");
    a.css("border", "1px solid #dedede");
    a.css("-webkit-border-radius", "3px");
    a.css("-moz-border-radius", "3px");
    a.css("border-radius", "3px");
    a.css("background", "#b7d770");
    a.css("background", "-webkit-gradient(linear, left top, left bottom, from(#5e5e5e), to(#434343))");
    a.css("background", "-moz-linear-gradient(top,  #5e5e5e, #434343)");
    a.css("border-color", "#4c4c4c #313131 #1f1f1f");
    a.css("color", "#fff");
    a.css("text-shadow", "0 1px 0 #2e2e2e");
    a.css("-webkit-box-shadow", "0 1px 1px #afafaf, inset 0 1px 0 #868686");
    a.css("-moz-box-shadow", "0 1px 1px #afafaf, inset 0 1px 0 #868686");
    a.css("box-shadow", "0 1px 1px #afafaf, inset 0 1px 0 #868686"); 
    a.css("margin-top", "-15px");
    a.css("margin-left", "5px");

    p.css("padding", "5px");
    p.css("padding-left", "10px");
    p.text("There are some images in this page that could help Geotag X project");
    p.append(a);
    bar.attr("id", "PyBossaBar");
    bar.css("position", "absolute");
    bar.css("top", "0");
    bar.css("right", "0");
    bar.css("width", "100%");
    bar.css("color", "white");
    bar.css("z-index", "99999999");
    bar.css("background-color", "rgb(139, 191, 54)");
    bar.append(p);
    $("body").append(bar);
    $("img").map(function(){
        if ( ($(this).width() >= 150) && ($(this).height() >= 100) ) {
            //console.log("Image found here: " + $(this).attr("src"));
            // Button to submit the picture
            var a = $("<a/>");
            a.attr("href", "#");
            a.text("Submit to PyBossa");
            a.css("display", "inline-block");
            a.css("text-decoration", "none");
            a.css("font", "bold 12px/12px HelveticaNeue, Arial");
            a.css("padding", "4px 7px");
            a.css("color", "#555");
            a.css("border", "1px solid #dedede");
            a.css("-webkit-border-radius", "3px");
            a.css("-moz-border-radius", "3px");
            a.css("border-radius", "3px");
            a.css("background", "#b7d770");
            a.css("background", "-webkit-gradient(linear, left top, left bottom, from(#cae285), to(#9fcb57))");
            a.css("background", "-moz-linear-gradient(top,  #cae285, #9fcb57)");
            a.css("border-color", "#adc671 #98b65b #87aa4a");
            a.css("color", "#5d7731");
            a.css("text-shadow", "0 1px 0 #cfe5a4");
            a.css("-webkit-box-shadow", "0 1px 1px #d3d3d3, inset 0 1px 0 #d7e9a4");
            a.css("-moz-box-shadow", "0 1px 1px #d3d3d3, inset 0 1px 0 #d7e9a4");
            a.css("box-shadow", "0 1px 1px #d3d3d3, inset 0 1px 0 #d7e9a4"); 
            a.css("margin-top", "-15px");
            a.css("margin-left", "5px");

            $(this).parent().append(a);
        }
        //else {
        //    console.log("Image too small");
        //    console.log($(this).width());
        //}
    });
}
//else {
//    console.log("KeyWord NOT found");
//}