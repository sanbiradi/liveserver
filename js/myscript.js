$('textarea').keyup(function(){
    var data= $("textarea[name*='input']").val();
    
        $("iframe[name*='output']" ).contents().find('html').html(data);
    
    });
    
    