// saving language
// WIP check if the lang === NULL

$('#en').on('click', function changeLang() {
    var lang = "en";
    localStorage.setItem("lang", lang);
});

$('#es').on('click', function changeLang() {
    var lang = "es";
    localStorage.setItem("lang", lang);
});

function forceLang() {
    var lang = localStorage.getItem("lang");
    if (lang === "es") {
        multiLanguage();
    }
}

// beating heart function
$(document).ready(function() {
    setInterval ('cursorAnimation0()', 1800);
});

function cursorAnimation0() {
    $('.beating').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

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

// Scroll To Top function for index page
$(document).ready(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Chrome, Safari and Opera
//     document.documentElement.scrollTop = 0; // For IE and Firefox
// }

// Method for checking the answers in chapter 1

$('#answer').on('click', function validate() {
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
});


$('#answer2').on('click', function validate() {
    var radios;
    var i;
    var right;
    radios = document.getElementById("question2").getElementsByTagName("input");
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
        document.getElementById('indicatingCorrect2').style.display = 'block';
        document.getElementById('indicatingWrong2').style.display = 'none';
        document.getElementById('indicatingBlank2').style.display = 'none';
    } else if(right == 0) {
        document.getElementById('indicatingWrong2').style.display = 'block';
        document.getElementById('indicatingCorrect2').style.display = 'none';
        document.getElementById('indicatingBlank2').style.display = 'none';
    }  else{
        document.getElementById('indicatingBlank2').style.display = 'block';
        document.getElementById('indicatingCorrect2').style.display = 'none';
        document.getElementById('indicatingWrong2').style.display = 'none';
    }

    return false;
});

// flag to avoid repetitive embedded
var elementExists = null;
var myframeExists = false;

// to embed all the animation
function createIframe(chAndSlide){
    var i = document.createElement("iframe");

    i.id = "myframe";
    // loading Ketones Page ch1
    if (chAndSlide === "ch1Slide7")
    {
        i.src = "ch1Ketones/site/index.html";
        document.getElementById("ketones").appendChild(i);
        myframeExists = true;
    }
    // loading diabetes types ch1
    else if (chAndSlide === "ch1Slide100")
    {
        i.src = "ch1Item1/WhatIsT1D.html";
        document.getElementById("item1").appendChild(i);
    }
    // Loading Insulin Control ch3
    else if (chAndSlide === "ch3Slide24")
    {
        i.src = "ch3HowInsulinControls/index.html";
        document.getElementById("insulin").appendChild(i);
    }
    else
    {
        i.src = "ch7Exercise&Diabetes/site/index.html";
        document.getElementById("exercise").appendChild(i);
    }
};

function loadEmbeddedPage(chAndSlide) {
    elementExists = document.getElementById("myframe");
    if (elementExists === null)
    {
        window.onload = createIframe(chAndSlide);
    }
    else if (chAndSlide === "ch1Slide7" && !myframeExists)
    {
        window.onload = createIframe(chAndSlide);
    }
}

// chewing page js

// glucose meter draw by canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// init glucose measure
// ctx.fillStyle = "blue";
// ctx.fillRect(0,350,100,500);

// smoothe fill glucose meater function
function smoothDraw(x,y,color) {
    ctx.globalCompositeOperation = 'source-atop';
    ctx.fillStyle = color;
    // alert(color);
    ctx.fillRect(0, x, 100, 500);
    ctx.globalCompositeOperation = 'source-over';
    if (x > y) {
        setTimeout(function () {smoothDraw(--x,y,color);}, 2);
    }
}


function clearGlucoseColor(){
  // glucose meter draw by canvas
ctx.fillStyle = "white";
ctx.fillRect(0,0,100,500);
swallow();
}

function changeGlucoseApple(){
  // glucose meter draw by canvas
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearGlucoseColor();
  smoothDraw(390,250,"green");
}

// ctx.fillStyle = "green";
// ctx.fillRect(0,250,100,500);//apple 2

function changeGlucoseCake(){
  // glucose meter draw by canvas
  clearGlucoseColor();
  smoothDraw(390,0,"red");

}
function changeGlucosePotato(){
  // glucose meter draw by canvas
clearGlucoseColor();
  smoothDraw(390,150,"orange");
}
function changeGlucoseChik(){
  // glucose meter draw by canvas
clearGlucoseColor();
  smoothDraw(390,350,"blue");
}

// animation

var addEvent = (function () {
  if (document.addEventListener) {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.addEventListener(type, fn, false);
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  } else {
    return function (el, type, fn) {
      if (el && el.nodeName || el === window) {
        el.attachEvent('on' + type, function () { return fn.call
          (el, window.event); });
      } else if (el && el.length) {
        for (var i = 0; i < el.length; i++) {
          addEvent(el[i], type, fn);
        }
      }
    };
  }
})();

(function () {

var pre = document.createElement('pre');
pre.id = "view-source"

// private scope to avoid conflicts with demos
addEvent(window, 'click', function (event) {
  if (event.target.hash == '#view-source') {
    // event.preventDefault();
    if (!document.getElementById('view-source')) {
      pre.innerHTML = ('<!DOCTYPE html>\n<html>\n' + document.documentElement.innerHTML + '\n</html>').replace(/[<>]/g, function (m) { return {'<':'&lt;','>':'&gt;'}[m]});
      document.body.appendChild(pre);      
    }
    document.body.className = 'view-source';
    
    var sourceTimer = setInterval(function () {
      if (window.location.hash != '#view-source') {
        clearInterval(sourceTimer);
        document.body.className = '';
      }
    }, 200);
  }
});
  
})();


  var eat = ['yum!', 'gulp', 'burp!', 'nom'];
  var yum = document.createElement('p');
  var msie = /*@cc_on!@*/0;
  yum.style.opacity = 1;

  var links = document.querySelectorAll('li > a'), el = null;
  for (var i = 0; i < links.length; i++) {
    el = links[i];
  
    el.setAttribute('draggable', 'true');
  
    addEvent(el, 'dragstart', function (e) {
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('Text', this.id);
    });
  }

  var bin = document.querySelector('#bin');
  var allThree = document.querySelectorAll('#doMore,#bin,#doLess');
  var doM = document.querySelector('#doMore');
  var doL = document.querySelector('#doLess');

// drag and drop for all three chptr 6 and 7
addEvent(allThree, 'dragover', function (e) {
    if (e.preventDefault) e.preventDefault(); // allows us to drop
    this.className = 'over';
    e.dataTransfer.dropEffect = 'copy';
    return false;
  });

  addEvent(allThree, 'dragenter', function (e) {
    this.className = 'over';
    return false;
  });

  addEvent(allThree, 'dragleave', function () {
    this.className = '';
  });

// chapter 6 chewing apple page hs
  

  addEvent(bin, 'drop', function (e) {
    if (e.stopPropagation) e.stopPropagation(); 

 
      var el = document.getElementById(e.dataTransfer.getData('Text'));
      // 3800 timeout for later glucose measure
          setTimeout(function() {
              // el.id == food's id
              if(el.id == "one"){
                     
                  changeGlucoseCake();       
              }
               if(el.id == "two"){
                  changeGlucosePotato();
              }
               if(el.id == "three"){
                  changeGlucoseApple();
              }
               if(el.id == "four"){
                  changeGlucoseChik();
              }
              // doesnt remove the food item
              // el.parentNode.removeChild(el);
      }, 3800);



    bin.className = '';
    yum.innerHTML = eat[parseInt(Math.random() * eat.length)];
    yum.style.color = "orange";

    var y = yum.cloneNode(true);
    bin.appendChild(y);

    setTimeout(function () {
      
    
      var t = setInterval(function () {
        if (y.style.opacity <= 0) {
          if (msie) { 
            y.style.display = 'none';
          }
          clearInterval(t); 
        } else {
          y.style.opacity -= 0.3;
        }
      }, 050);
    }, 250);

  chewThreeTimes();
  // init glucose measure
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "blue";
  ctx.fillRect(0,350,100,500);


    return false;
  });


function showGluInstr(){
  var showNxtInstru = document.getElementById("showNextInstr");
   showNextInstr.innerHTML = "(Now observe how glucose measurement changes)";
   showNextInstr.className += "animated bounceIn";
}
function resetInstr(){
  document.getElementById("chewInstru").innerHTML = "Now drag another food into Kara's mouth"; 
  // document.getElementById("showNextInstr").innerHTML = "";
   
}
function swallow(){
  var open = document.getElementById("bigHead");
    open.src = "img/ch6/p56_Kara_head_mouth_open.png";                      
}

function chew()
{ 

    var chew = document.getElementById("bigHead");
    var cancelInstru = document.getElementById("chewInstru");

    cancelInstru.innerHTML = "";
    chew.src = "img/ch6/p56_Kara_head_eating.png";                              
}


function chewThreeTimes(){
  // silly implementation of chewing 3 times
        setTimeout(function() {chew();
            setTimeout(function() {
                swallow();
                    setTimeout(function() {
                      chew();
                          setTimeout(function() {
                          swallow();
                            setTimeout(function() {
                            chew();
                              setTimeout(function() {
                            swallow();
                            showGluInstr();""
                        }, 500);
                        }, 500);
                      }, 500);
                }, 500);
            }, 500);
        }, 500);
}

// ch7 my biggest bug

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    // data is the id
    var data = ev.dataTransfer.getData("text");
    var chkTxt = document.getElementById("checkText");
    if(data == "tv" || data == "cmptr" || data == "sleep"){
      ev.target.appendChild(document.getElementById(data));
      chkTxt.innerHTML = "You are Correct!";
      chkTxt.style.color = "green";

    }else{
      chkTxt.innerHTML = "Nope, try another box";
      chkTxt.style.color = "red";
    } 
}

function drop2(ev) {
    ev.preventDefault();
    // data is the id
    var data = ev.dataTransfer.getData("text");
    var chkTxt = document.getElementById("checkText");
    if(data == "soccer" || data == "dance" || data == "playground" || data == "rope"){
    ev.target.appendChild(document.getElementById(data));
     chkTxt.innerHTML = "You are Correct!";
      chkTxt.style.color = "green";
    }else{
      chkTxt.innerHTML = "Nope, try another box";
      chkTxt.style.color = "red";
    }
}
