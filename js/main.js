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


// scrtoll to top func

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("myBtn").style.display = "block";

//     } else {
//         document.getElementById("myBtn").style.display = "none";
//     }
// }

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

// pop up func
function popFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
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


var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});


var layer = new Konva.Layer();
/*
* leave center point positioned
* at the default which is at the center
* of the hexagon
*/
var imageObj = new Image();
var blueHex = new Konva.Image({
    x: stage.getWidth() / 3,
    y: stage.getHeight() / 4,
    image: imageObj,
    draggable: true
});

/*
* move center point to right side
* of hexagon
*/

layer.add(blueHex);
stage.add(layer);
var period = 2000;

var anim = new Konva.Animation(function(frame) {
    var scale = (8+Math.sin(frame.time * 2 * Math.PI / period))/40;
    // scale x and y
    blueHex.scale({ x :scale, y : scale});

}, layer);
imageObj.src = 'https://images.vexels.com/media/users/3/134121/isolated/preview/5ff73adb05d7f1fe47dd49bb1b08affa-star-cartoon-icon-50-by-vexels.png';
anim.start();
