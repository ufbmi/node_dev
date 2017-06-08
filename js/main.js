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
    (document.body.scrollTop > 20 || document.documentElement.scrollTop >20)? toTop.style.display="block" :  toTop.style.display="none";
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


//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     function loadImages(sources, callback) {
//         var assetDir = '/assets/';
//         var images = {};
//         var loadedImages = 0;
//         var numImages = 0;
//         for(var src in sources) {
//             numImages++;
//         }
//         for(var src in sources) {
//             images[src] = new Image();
//             images[src].onload = function() {
//                 if(++loadedImages >= numImages) {
//                     callback(images);
//                 }
//             };
//             images[src].src = assetDir + sources[src];
//         }
//     }
//     function isNearOutline(animal, outline) {
//         var a = animal;
//         var o = outline;
//         var ax = a.getX();
//         var ay = a.getY();
//         if(ax > o.x - 20 && ax < o.x + 20 && ay > o.y - 20 && ay < o.y + 20) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//     function drawBackground(background, beachImg, text) {
//         var context = background.getContext();
//         context.drawImage(beachImg, 0, 0);
//         context.setAttr('font', '20pt Calibri');
//         context.setAttr('textAlign', 'center');
//         context.setAttr('fillStyle', 'white');
//         context.fillText(text, background.getStage().getWidth() / 2, 40);
//     }
//     function initStage(images) {
//         var stage = new Konva.Stage({
//             container: 'container',
//             width: 578,
//             height: 530
//         });
//         var background = new Konva.Layer();
//         var animalLayer = new Konva.Layer();
//         var animalShapes = [];
//         var score = 0;
//         // image positions
//         var animals = {
//             snake: {
//                 x: 10,
//                 y: 70
//             },
//             giraffe: {
//                 x: 90,
//                 y: 70
//             },
//             monkey: {
//                 x: 275,
//                 y: 70
//             },
//             lion: {
//                 x: 400,
//                 y: 70
//             }
//         };
//         var outlines = {
//             snake_black: {
//                 x: 275,
//                 y: 350
//             },
//             giraffe_black: {
//                 x: 390,
//                 y: 250
//             },
//             monkey_black: {
//                 x: 300,
//                 y: 420
//             },
//             lion_black: {
//                 x: 100,
//                 y: 390
//             }
//         };
//         // create draggable animals
//         for(var key in animals) {
//             // anonymous function to induce scope
//             (function() {
//                 var privKey = key;
//                 var anim = animals[key];
//                 var animal = new Konva.Image({
//                     image: images[key],
//                     x: anim.x,
//                     y: anim.y,
//                     draggable: true
//                 });
//                 animal.on('dragstart', function() {
//                     this.moveToTop();
//                     animalLayer.draw();
//                 });
//                 /*
//                        * check if animal is in the right spot and
//                        * snap into place if it is
//                        */
//                 animal.on('dragend', function() {
//                     var outline = outlines[privKey + '_black'];
//                     if(!animal.inRightPlace && isNearOutline(animal, outline)) {
//                         animal.position({
//                             x : outline.x,
//                             y : outline.y
//                         });
//                         animalLayer.draw();
//                         animal.inRightPlace = true;
//                         if(++score >= 4) {
//                             var text = 'You win! Enjoy your booty!';
//                             drawBackground(background, images.beach, text);
//                         }
//                         // disable drag and drop
//                         setTimeout(function() {
//                             animal.draggable(false);
//                         }, 50);
//                     }
//                 });
//                 // make animal glow on mouseover
//                 animal.on('mouseover', function() {
//                     animal.image(images[privKey + '_glow']);
//                     animalLayer.draw();
//                     document.body.style.cursor = 'pointer';
//                 });
//                 // return animal on mouseout
//                 animal.on('mouseout', function() {
//                     animal.image(images[privKey]);
//                     animalLayer.draw();
//                     document.body.style.cursor = 'default';
//                 });
//                 animal.on('dragmove', function() {
//                     document.body.style.cursor = 'pointer';
//                 });
//                 animalLayer.add(animal);
//                 animalShapes.push(animal);
//             })();
//         }
//         // create animal outlines
//         for(var key in outlines) {
//             // anonymous function to induce scope
//             (function() {
//                 var imageObj = images[key];
//                 var out = outlines[key];
//                 var outline = new Konva.Image({
//                     image: imageObj,
//                     x: out.x,
//                     y: out.y
//                 });
//                 animalLayer.add(outline);
//             })();
//         }
//         stage.add(background);
//         stage.add(animalLayer);
//         drawBackground(background, images.beach, 'Ahoy! Put the animals on the beach!');
//     }
//     var sources = {
//         beach: 'beach.png',
//         snake: 'snake.png',
//         snake_glow: 'snake-glow.png',
//         snake_black: 'snake-black.png',
//         lion: 'lion.png',
//         lion_glow: 'lion-glow.png',
//         lion_black: 'lion-black.png',
//         monkey: 'monkey.png',
//         monkey_glow: 'monkey-glow.png',
//         monkey_black: 'monkey-black.png',
//         giraffe: 'giraffe.png',
//         giraffe_glow: 'giraffe-glow.png',
//         giraffe_black: 'giraffe-black.png'
//     };
//     loadImages(sources, initStage);