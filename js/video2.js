( function( $ ) {
    "use strict";
    
    var $playerObject = $('.player');

    $playerObject.mb_YTPlayer();

    // Video Controls (Play/Pause - Sound On/Off)
    $('#video-controls a').click(function(){

        var icon = $(this).find('.p');

        if ( $(this).attr('id') == 'on-off-sound' ) {

            if ( icon.hasClass('fa-volume-off') ) {
                icon.removeClass('fa fa-volume-off').addClass('fa fa-volume-up');
            } else {
                icon.removeClass('fa fa-volume-up').addClass('fa fa-volume-off');
            }
            $playerObject.toggleVolume();

        } else {

            if ( icon.hasClass('play-btn') ) {
                icon.removeClass('play-btn').addClass('pause-btn');
                $('.player').playYTP();
            } else {
                icon.removeClass('pause-btn').addClass('play-btn');
                $playerObject.pauseYTP();
            }

        } 
        return false;
    });

} )( jQuery );