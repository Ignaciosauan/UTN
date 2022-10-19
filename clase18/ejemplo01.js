const item = document.getElementsByClassName('item');

function CambiarVisibilidad() {
    const item = item[2];
    if(item.style.visibility == 0){
        item.style.visibility = 'hidden'
    } else{
        item.style.visibility = ''
    }
}


setInterval(CambiarVisibilidad, 1000);