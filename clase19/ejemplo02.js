const alumnos =[
    {
        nombre: 'flavia', edad:10
    },
    {
        nombre: 'flavia', edad:3
    },
    {
        nombre: 'flavia', edad:5
    },
    {
        nombre: 'flavia', edad:2
    },
    {
        nombre: 'flavia', edad:4
    },
    {
        nombre: 'flavia', edad:3
    },
]
const chicos = alumnos.filter(
    alumnos => alumnos.edad <=4
)

console.log(chicos)

for(let i=0; i<chicos.length; i++){
    document.write(´<p>Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad}</p´>)
}