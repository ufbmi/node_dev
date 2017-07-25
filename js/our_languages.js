/**
 * Created by yotoo2920 on 6/26/2017.
 */
var multilanguage = {
    'en' : {
        "index-0" : 'Back To Homepage',
        "index-1" : 'Chapter 1 - What is Diabetes?',
        'index-2' : 'Chapter 2 - Glucose Monitoring',
        'index-3' : 'Chapter 3 - Insulin',
        'index-4' : 'Chapter 4 - Hypoglycemia or Low',
        'index-5' : 'Chapter 5 - Hyperglycemia or High',
        'index-6' : 'Chapter 6 - Nutrition',
        'index-7' : 'Chapter 7 - Exercise and Diabetes',
        'index-8' : 'Chapter 8 - Personal Plan',
        'index-9' : 'Diabetes Tutorial For Kids',
        'index-10' : 'To help you learn it, fight it and be strong about it',
        'index-11' : 'Built with HTML5, CSS3, Bootstrap, jQuery & JavaScript'
    },
    'es' : {
        'index-0' : 'Pagina Principal',
        'index-1' : 'Chapter 1 - Que es Diabetes?',
        'index-2' : 'Chapter 2 - Monitoreo de Glucosa',
        'index-3' : 'Chapter 3 - Insulina',
        'index-4' : 'Chapter 4 - Ipoglicemia o baja',
        'index-5' : 'Chapter 5 - Iperglicemia o alta',
        'index-6' : 'Chapter 6 - Nutricion',
        'index-7' : 'Chapter 7 - Ejercicios y Diabites',
        'index-8' : 'Chapter 8 - Plan personal',
        'index-9' : 'Tutorial para niños sobre Diabetes',
        'index-10' : 'Para ayudarte a aprender y a ser fuerte',
        'index-11' : 'Construido con HTML5, CSS3, Bootstrap, jQuery & JavaScript'
    }
};

// For multi-language
$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index,element){
            $(this).text(multilanguage[lang][$(this).attr('key')]);
        });
    });
});