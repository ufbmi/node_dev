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
        changeLang();
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

// // solution for the load issue with the ketone page
// // 1- must uncomment in main.css the video, iframe {}
// // fix white background color
// function createIframe(){
//     // alert("create");
//     var i = document.createElement("iframe");
//     i.src = "ch1Ketones/site/index.html";
//     i.id = "myframe";
//     document.getElementById("ketones").appendChild(i);
// };

// change bg color of i frame func
function whiteFrameBg() {
    // myframe1 is kletones in chpater 1, myframe2 is that one in chapter 3
    var x1 = document.getElementById("myFrame");
    var y = (x1.contentWindow || x1.contentDocument);
    if (y.document)y = y.document;
    y.body.style.backgroundColor = "white";
}

// function loadKetonePage() {
//     // alert("load ke");
//     window.onload = createIframe();
//     whiteFrameBg();
// }
