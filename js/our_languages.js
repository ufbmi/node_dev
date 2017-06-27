/**
 * Created by yotoo2920 on 6/26/2017.
 */
var multilanguage = {
    'en' : {
        'websiteName' : 'Diabetes Tutorial For Kids',
        'message' : 'To help you learn it, fight it and be strong about it'
    },
    'es' : {
        'websiteName' : 'Tutorial para niños sobre Diabetes',
        'message' : 'Para ayudarte a convivir y a conocer todo a cerca de ella'
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