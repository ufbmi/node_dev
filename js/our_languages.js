/**
 * Created by yotoo2920 on 6/26/2017.
 */
var multilanguage = {
    'en' : {
        "index-0" : 'Back To Homepage',
        "index-1" : 'Capitulo 1 - What is Diabetes?',
        'index-2' : 'Chapter 2 - Glucose Monitoring',
        'index-3' : 'Chapter 3 - Insulin',
        'index-4' : 'Chapter 4 - Hypoglycemia or Low',
        'index-5' : 'Chapter 5 - Hyperglycemia or High',
        'index-6' : 'Chapter 6 - Nutrition',
        'index-7' : 'Chapter 7 - Exercise and Diabetes',
        'index-8' : 'Chapter 8 - Personal Plan',
        'index-889' : 'Chapter 9 - Famous with Diabetes',
        'index-9' : 'Diabetes Tutorial For Kids',
        'index-10' : 'To help you learn it fight it and be strong about it',
        'index-11' : 'Built with HTML5, CSS3, Bootstrap, jQuery & JavaScript',
        'ch1-0' : 'Chapter 1',
        'ch1-1' : 'What is Diabetes ?'
    },
    'es' : {
        'index-0' : 'Pagina Principal',
        'index-1' : 'Capitulo 1 - ¿Qué es la Diabetes?',
        'index-2' : 'Capitulo 2 - Monitoreo de Glucosa',
        'index-3' : 'Capitulo 3 - Insulina',
        'index-4' : 'Capitulo 4 - Hipoglucemia o glucosa baja',
        'index-5' : 'Capitulo 5 - Hiperglucemia o glucosa alta',
        'index-6' : 'Capitulo 6 - Nutricion',
        'index-7' : 'Capitulo 7 - Ejercicios y Diabetes',
        'index-8' : 'Capitulo 8 - Plan personal',
        'index-889' : 'Capitulo 9 - Famosos con Diabetes',
        'index-9' : 'Tutorial para niños sobre Diabetes',
        'index-10' : 'Para ayudarte a aprender y a ser fuerte',
        'index-11' : 'Construido con HTML5, CSS3, Bootstrap, jQuery & JavaScript',
        'ch1-0' : 'Capitulo 1',
        'ch1-1' : 'Qué es la Diabetes?'
    }
};

// For multi-language
var multiLanguage = function(){
    var lang = $(this).attr('id');

    $('.lang').each(function(index,element){
        if (lang !== undefined)
        {
            $(this).text(multilanguage[lang][$(this).attr('key')]);
            alert("!= undefined");
        }
        else
        {
            console.log(lang);
        }
    });
};

function changeLang(){
    console.log("called changeLang");
    $('.translate').click(function(){
    var lang = $(this).attr('id');

        console.log("called inside");

        $('.lang').each(function(index,element){
            $(this).text(multilanguage[lang][$(this).attr('key')]);
        });
    });
};
