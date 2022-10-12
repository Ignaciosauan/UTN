function validarLargo(texto,largoRequerido){
    return texto.length >= largoRequerido
}

function validarForm(){
    const nombrevalido = true
    const passwordvalido = validarLargo(document.form1.text1.value,5);

    const resultado = nombrevalido && passwordvalido ;
    if(resultado){
        alert('Es valido')
    } else{
        alert('No es valido')
    }
}