// Manejo de ForEach, Map, Iterator

const pendientes = ['Tarea','Correr','Proyecto','Aprender Programacion'];

pendientes.forEach( (item,idex) => {
    console.log(`${idex} : ${item}`);
});

console.log(pendientes);

const carrito = [
    { id:1, producto:'Libro'},
    { id:1, producto:'Playera'},
    { id:1, producto:'Guitarra'},
    { id:1, producto:'Disco'}
];

const nombreProducto = carrito.map( (carrito) => {
    return carrito.producto;
});

console.log(carrito);
console.log(nombreProducto);

const automovil = {
    modelo:'Camaro',
    motor:6.1,
    anio:1993,
    marca:'Chevrolet'
}

for(let auto in automovil){
    console.log(`${auto} : ${automovil[auto]}`);
}