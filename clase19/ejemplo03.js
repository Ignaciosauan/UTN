const empleados =[
    {
        nombre: 'Flavia' , trabajo: 'desarrollador'
    },
    {
        nombre: 'Pablo' , trabajo: 'dabogado'
    },
    {
        nombre: 'Lucas' , trabajo: 'maestro'
    },
    {
        nombre: 'Emilio' , trabajo: 'desarrollador'
    },
    {
        nombre: 'Tomas' , trabajo: 'jardinera'
    },
    {
        nombre: 'Favian' , trabajo: 'desarrollador'
    },

]

const desarrollador = empleados.filter(
    empleado => empleado.trabajo =='desarrolador'
)

console.log(desarrollador)