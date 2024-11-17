/** ###### app.js ###### */

	/**
	 * Radio
	 */

    function PopWindow() {
        $('#video__inicio')[0].pause();
        window.open('http://alfafm.com.uy/assets/radio','radio','width=395,height=188,menubar=no,scrollbars=no,toolbar=no,location=no,directories=no,resizable=no,top=0,left=0').focus();
    }


jQuery(function() {

    /**
     * Configuración predeterminado del reproductor de la página de Inicio
     */
    
        document.getElementById('video__inicio').volume = 0.1;


    /**
     * Inicio - Tabs del reproductor de los podcasts
     */

        $('.animador').click( function() {
            var tabId = $(this).attr('id');

            $('.animador').removeClass('twin');
            $(this).addClass('twin');

            $('.playlist').removeClass('twin');
            $('.playlist').each(function() {
                var currentPlaylistId = $(this).attr('id');

                if ( tabId == currentPlaylistId ) {
                    $(this).addClass('twin');
                }
            });
        });


    /**
     * Despliegue
     */


         $('.encabezada__despliegue').click(function() {
             var animationDuration = 200;

             if ( $(this).hasClass('abierto') ) {
                $('#video__inicio')[0].play();
                 $(this).removeClass('abierto');
                 $('.escucharmicros__encabezada').removeClass('abierto');
                $('.encabezada__animadores').fadeOut(animationDuration);
                $('.escucharmicros__cuerpo').fadeOut(animationDuration);
                $('.nicescroll-rails-vr').fadeOut(animationDuration);
                $('.nicescroll-cursors').fadeOut(animationDuration);
            }

            else {
                $('#video__inicio')[0].pause();
                $(this).addClass('abierto');
                 $('.escucharmicros__encabezada').addClass('abierto');
                $('.encabezada__animadores').fadeIn(animationDuration);
                $('.escucharmicros__cuerpo').fadeIn(animationDuration);
                $('.nicescroll-rails-vr').fadeIn(animationDuration);
                $('.nicescroll-cursors').fadeIn(animationDuration);
            }
        });


    /**
     * Contáctenos
     */

        $('#submit').click(function() {
            $('.error').hide();

            var hasError = false;
            var nombreVal = $('.formulario #nombreVal').val();
            var emailVal = $('.formulario #emailVal').val();
            var textoVal = $('.formulario #textoVal').val();

            function validateEmail($email) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if (!emailReg.test($email)) {
                    return false;
                } else {
                    return true;
                }
            }

            $('.error').remove();

            if (nombreVal.length < 3 || nombreVal.length > 20) {
                $('.formulario #nombreVal').after('<span class="error">M&iacute;nimo 3 car&aacute;cteres y m&aacute;ximo 20.</span>').fadeIn();
                $('.formulario #nombreVal').addClass('inputError');
                hasError = true;
            } else {
                $('.formulario #nombreVal').removeClass('inputError');
            }

            if (emailVal == '') {
                $('.formulario #emailVal').after('<span class="error">Escriba su correo.</span>');
                $('.formulario #emailVal').addClass('inputError');
                hasError = true;
            } else if (!validateEmail(emailVal)) {
                $('.formulario #emailVal').after('<span class="error">Escriba correctamente el formato del correo.</span>');
                $('.formulario #emailVal').addClass('inputError');
                hasError = true;
            } else {
                $('.formulario #emailVal').removeClass('inputError');
            }
            
            if (textoVal.length < 3) {
                $('.formulario #textoVal').after('<span class="error">Escriba un mensaje m&aacute;s largo.</span>');
                $('.formulario #textoVal').addClass('inputError');
                hasError = true;
            } else {
                $('.formulario #textoVal').removeClass('inputError');
            }
            
            if (hasError == true) {
                return false;
            }
        });

        var limite = 640;

        function verlimite() {
            var texto = $("#textoVal").val();
            var largo = texto.length;

            if (largo > limite) {
                var texto = texto.substring(0,limite);
                $("#textoVal").val(texto);
                muestra=0
;				} else {
                muestra=limite-largo;
            }

            $("#remaining").text(muestra);
        }

        $("#textoVal").keypress(function(event){
            verlimite();
        });

        $("#textoVal").change(function(event){
            verlimite();
        });


    /**
     * Scroll animado
     */

        /* juizScrollTo('a[href^="#"]');

        $('.piedepagina__top a').click(function() {
            $('html').animate({
                scrollTop: $('#contenedor').offset().top
            }, "slow");
        }); */


    /**
     * drPlayer
     * Web: http://drplayer.com/
     * Eeehh no... Esa es la original: http://www.devreactor.com/projects/drplayer.aspx
     */

        $('.playlist').playlist({
                playerurl: 'assets/swf/drplayer.swf'
            }
        );


    /**
     * jQuery NiceScroll
     */

        $('.playlist').niceScroll({
            autohidemode: false,
            cursorcolor: '#888888',
            cursorwidth: '4px',
            cursorborderradius: '4px',
            cursorborder: false
        });

});