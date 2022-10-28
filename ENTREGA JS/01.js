const edad = parseInt(prompt('Ingrese su edad',''));

if(Number.isNaN(edad)){
    document.write('Debes ingresar un numero')
} else if (edad >= 18){
    document.write('PODES CONDUCIR')
} else{
    document.write('No podes conducir')
}