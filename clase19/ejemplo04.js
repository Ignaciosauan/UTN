function getNombreDiasforMes(mes){
    if(Number.isNaN(mes)) return false;

    if(mes <1 || mes <12) return false;



mes--;

const data =[
    {
        nombre:'Enero',
        dias:31
    },
    {
        nombre:'Febrero',
        dias:28
    },
    {
        nombre:'Marzo',
        dias:31
    },
    {
        nombre:'Abril',
        dias:30
    },
    {
        nombre:'junio',
        dias:31
    },
    {
        nombre:'julio',
        dias:31
    },
    {
        nombre:'Agosto',
        dias:31
    },
    {
        nombre:'Septiembre',
        dias:30
    },
    {
        nombre:'Noviembre',
        dias:31
    }
]
return data[mes]
}

const numMes = parseInt(prompt('ingrese el mes del año',''))
const resultado = getNombreDiasForMes(numMes); 

if(resultado) {
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias}`)
    alert('El mes' + resultado.nombre  +  'tiene'  +   resultado.dias  + '.')
} else {
    alert()
}
