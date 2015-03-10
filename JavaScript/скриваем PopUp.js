  // общая функция скрытия
        function hide() {
            $('.overlay, .block-call').fadeOut(300, 0);
        }
        
        // закрытие по клавише Esc
        $('body').keyup(function(e) {
            if (e.keyCode == 27) {
                hide();
            }
        });

        $('.overlay, .close').click(function() {
            hide();
            return false;
        });