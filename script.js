$(() => {
    M.AutoInit();
    for( let i of document.querySelectorAll('.emoji') ){
        i.innerHTML = joypixels.toImage( i.innerHTML );
    }
});