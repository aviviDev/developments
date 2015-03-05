var defaultText= 'Search';

    $('your_selector').val(defaultText).css('color','#999').focus(function(){
        if($(this).val() == defaultText){
            $(this).css('color','').val('');
            }
        }).blur(function(){
            if($(this).val() == ''){
                $(this).val(defaultText).css('color','#999')
            }
        });