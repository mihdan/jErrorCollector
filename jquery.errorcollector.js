(function($) { 
    
    var defaults = {
        text: 'Сообщение успешно отправлено'
    };
    
    var options;
    
    var methods = {
    	init: function(params) {
    		
			options = $.extend({}, defaults, options, params);
    		
    		
	    return this.each(function() {
            
	    });
    	},
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
     
    $.fn.errorCollector = function(method) {        
        if ( methods[method] ) {
        	return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
        	return methods.init.apply( this, arguments );
        } else {
        	$.error( 'Метод ' +  method + ' в jQuery.tooltip не существует' );
        }        
        
    };
})(jQuery);
