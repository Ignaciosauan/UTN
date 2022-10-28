const metros = 25000;
let transportes = '';

if(metros > 0 && metros <=10000){
    transportes = 'pie'
} else if (metros > 1000 && metros <=10000){
    transportes = 'bicicleta'
}else if(metros > 10000 && metros <=30000){
    transportes = 'colectivos'
}else if(metros > 30000 && metros <=10000){
    transportes = 'auto'
}else if (metros >10000){
    transportes = 'avion'
}



console.log(`Para ${metros} metros recomendados ir ${transportes}`);