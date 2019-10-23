$(() => {
    M.AutoInit();
    for( let i of document.querySelectorAll('.emoji') ){
        i.innerHTML = joypixels.toImage( i.innerHTML );
    }
    $('main').css('opacity', '1.0');
    $('.preloader-wrapper').fadeOut(500);
});