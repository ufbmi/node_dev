/**
 * Created by yotoo2920 on 6/26/2017.
 */
var multilanguage = {
    'en' : {
        "index-0" : 'Back To Homepage',
        "index-1" : 'Chapter 1 - What is Diabetes?',
        'index-2' : 'Chapter 2 - Glucose Monitoring',
        'index-3' : 'Chapter 3 - Insulin',
        'index-4' : 'Chapter 4 - Hypoglycemia',
        'index-5' : 'Chapter 5 - Nutrition',
        'index-6' : 'Chapter 6',
        'index-7' : 'Chapter 7',
        'index-8' : 'Diabetes Tutorial For Kids',
        'index-9' : 'To help you learn it, fight it and be strong about it',
        'index-10' : 'Built with HTML5, CSS3, Bootstrap, jQuery & JavaScript'
    },
    'es' : {
        'index-0' : 'Pagina Principal',
        'index-1' : 'Chapter 1 - Que es Diabetes?',
        'index-2' : 'Chapter 2 - Monitoreando Glucosa',
        'index-3' : 'Chapter 3 - Insulina',
        'index-4' : 'Chapter 4 - Ipoglicemia',
        'index-5' : 'Chapter 5 - Nutricion',
        'index-6' : 'Chapter 6',
        'index-7' : 'Chapter 7',
        'index-8' : 'Tutorial para niños sobre Diabetes',
        'index-9' : 'Para ayudarte a convivir y a conocer todo a cerca de ella',
        'index-10' : 'Construido con HTML5, CSS3, Bootstrap, jQuery & JavaScript'
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