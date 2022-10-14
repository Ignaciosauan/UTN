function todoslosparrafos(){
    const allparrafos = document.getElementsByTagName("p")
    //console.log(allparrafos)

    const num = allparrafos.length;

    alert(`hay ${num} elementos <p> dentro de este documento.`);
}

todoslosparrafos()


function parrafoscaja1(){
    const caja1 = document.getElementById('caja1');
    const caja1parrafos = caja1.getElementsByTagName('p');

    const num = caja1parrafos.length;

    alert(`hay ${num} elementos <p> dentro de este documento.`);
}

parrafoscaja1()

function parrafoscaja2(){
    const caja2 = document.getElementById('caja2');
    const caja2parrafos = caja2.getElementsByTagName('p');
    const num = caja2parrafos.length;

    alert (`hay ${num} elemetos <p> dentro de este documentos`)
    
}

parrafoscaja2()