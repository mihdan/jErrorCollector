(function($) { 
    
    var defaults = {
        text: 'Сообщение успешно отправлено'
    };
    
    var options;
    
    var methods = {
        getSelectedText : function( options ) { 
            var selectedText;
            if (window.getSelection) {
                selectedText = window.getSelection();
			} else if (document.getSelection) {
                selectedText = document.getSelection();
            } else if (document.selection) {
                selectedText = document.selection.createRange().text;
            }
        }
   
    };
     
    $.fn.errorCollector = function(params){
        
        options = $.extend({}, defaults, options, params);
        
        return this.each(function() {
            
        })
        
    };
})(jQuery);
