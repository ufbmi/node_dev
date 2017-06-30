/*Smooth scroll function*/
$('#smooth').on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 600, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});

// change bg color of i frame func
function whiteFrameBg() {
    var x = document.getElementById("myframe");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    y.body.style.backgroundColor = "white";
}

// scroll to top func
var t1=0;
window.onscroll = function() {scroll1()};

function scroll1()
{
    var toTop = document.getElementById("myBtn");
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)? toTop.style.display="block" :  toTop.style.display="none";
}

function scrollTopSmooth()
{
    var y = window.scrollY;
    y = y-600;
    window.scrollTo(0,y);
    if(y>0)
    {
        t1 = setTimeout("scrollTopSmooth()",80);
    }
    else
    {
        clearTimeout(t1);
    }
}

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Chrome, Safari and Opera
//     document.documentElement.scrollTop = 0; // For IE and Firefox
// }

// Method for checking the answers in chapter 1
document.getElementById("answer").onclick = validate;
function validate() {
    var radios;
    var i;
    var right;
    radios = document.getElementById("questionCptr1").getElementsByTagName("input");
    right = 2;//false 1=true 2=blank;
    for(i = 0; i < radios.length; i++) {
        if(radios[i].value == "true" && radios[i].checked == true){
            right = 1;
        } else if(radios[i].value == "false" && radios[i].checked == true){
            right = 0;
        }
    }

    // clear all other indicating texts preventing showing results from last time:)
    if(right== 1) {
        document.getElementById('indicatingCorrect').style.display = 'block';
        document.getElementById('indicatingWrong').style.display = 'none';
        document.getElementById('indicatingBlank').style.display = 'none';
    } else if(right == 0) {
        document.getElementById('indicatingWrong').style.display = 'block';
        document.getElementById('indicatingCorrect').style.display = 'none';
        document.getElementById('indicatingBlank').style.display = 'none';
    }  else{
        document.getElementById('indicatingBlank').style.display = 'block';
        document.getElementById('indicatingCorrect').style.display = 'none';
        document.getElementById('indicatingWrong').style.display = 'none';
    }

    return false;
}

// cursor function
$(document).ready(function() {
    setInterval ('cursorAnimation0()', 1500);
});

function cursorAnimation0() {
    $('#heart').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}


// // -------------------------------------------------Konva lib objs--------------------//
//
// var width = 120;
// var height = 120;
//
// var stage = new Konva.Stage({
//     container: ".resizingButton",
//     width: width,
//     height: height
// });
//
//
// var layer = new Konva.Layer();
// /*
// * leave center point positioned
// * at the default which is at the center
// * of the hexagon
// */
// var imageObj = new Image();
// var blueHex = new Konva.Image({
//     x: 0,
//     y: 0,
//     image: imageObj,
//     draggable: false
// });
//
// /*
// * move center point to right side
// * of hexagon
// */
//
// layer.add(blueHex);
// stage.add(layer);
// var period = 2000;
//
// var anim = new Konva.Animation(function(frame) {
//     var scale = (8+Math.sin(frame.time * 2 * Math.PI / period))/40;
//     // scale x and y
//     blueHex.scale({ x :scale, y : scale});
//
// }, layer);
// imageObj.src = 'https://images.vexels.com/media/users/3/134121/isolated/preview/5ff73adb05d7f1fe47dd49bb1b08affa-star-cartoon-icon-50-by-vexels.png';
// anim.start();

// // to load the keTones page into the iframe slide 7 chapter 1
// $(function(){
//     $("#ketonesWp").load("ch1Ketones/site/index.html");
// });