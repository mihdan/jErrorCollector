(function($) { 
    
    var defaults = {
        text: 'Сообщение успешно отправлено'
    };     
    
    var options;
     
    $.fn.errorCollector = function(params){
        
        options = $.extend({}, defaults, options, params);
        
        return this.each(function() {
            
        })
        
    };
})(jQuery);
