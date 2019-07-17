$(function() {
    /* Мобильное меню */
    $('.menu-btn').click(function() {
        $(this).toggleClass('open').next().slideToggle(300)
    });
    /* Скролл при клике по пунктам меню */
    $('.top-panel span').click(function() {
        var target = $(this).data('target');
        $('body,html').animate({
            scrollTop: $(target).offset().top - 10 + 'px'
        }, 600);
    });

    /* Select */
    $('#year-birth').click(function() {
        $(this).toggleClass('open');
    });
    $('.option-item').click(function() {
        var value = $(this).data('value');

        if (value != '') {
            $('#year-birth-value').addClass('active').text(value);
        } else {
            console.log(true);
            $('#year-birth-value').removeClass('active').text('');
        }
    });
    /* Закрытие селекта при клике вне блока */
    $(document).on("click",function(e){
        if (!$(e.target).closest(".year-birth").length)
            $('.year-birth').removeClass('open')
    });
    /* Scroll for select */
    $("#year-birth .options-inner").mCustomScrollbar();

    /* Checkbox */
    $('input[type="checkbox"]').change(function() {
        $(this).closest('label').toggleClass('active');
    });

    /* Фиксируем плейсхолдер текскового поля, если поле не пустое */
    $('input[type="text"]').focusout(function() {
        if ($(this).val() != '') 
            $(this).addClass('active');
        else 
            $(this).removeClass('active');
    });
    /* Для Edge, в котором кэшируеться введеные поля после обновления стр.,
        если поле не пустое, то лейбл смещаем вверх */
    $('input[type="text"]').each(function() {
        if ($(this).val() != '')
            $(this).addClass('active');
    });

    /* Focus для инпутов при клике на label */
    $('.field label').click(function() {
        $(this).siblings('input[type="text"]').trigger('focus');
    });

    /* Slider */
    $( "#slider" ).slider({
        range: "max",
        min: 1,
        max: 1000,
        value: 500,
        slide: function( event, ui ) {
            $( "#amount" ).val( ui.value );
        }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) );
});