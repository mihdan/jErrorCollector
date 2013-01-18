(function($) { 
    // значение по умолчанию - ЗЕЛЁНЫЙ
    var defaults = { color:'green' };
     
    // актуальные настройки, глобальные
    var options;
     
    $.fn.errorCollector = function(params){
        
        options = $.extend({}, defaults, options, params);
         
        
 
        return this;
    };
})(jQuery);
