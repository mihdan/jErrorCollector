(function($) { 
    // значение по умолчанию - ЗЕЛЁНЫЙ
    var defaults = {
        text: 'Сообщение успешно отправлено'
    };
     
    // актуальные настройки, глобальные
    var options;
     
    $.fn.errorCollector = function(params){
        
        options = $.extend({}, defaults, options, params);
         
        
 
        return this;
    };
})(jQuery);
