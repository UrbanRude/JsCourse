// Arreglo de objetos 

const autos = [
    {
        modelo: 'Mustang',
        motor: '6.0'
    },
    {
        modelo: 'Camaro',
        motor: '7.0'
    },
    {
        modelo: 'Challenger',
        motor: '9.0'
    }
]

autos.forEach(element => {
    console.log(`Imprimir con foreach`);
    console.log(element);
});

for( let i = 0; i < autos.length; i++ ){
    console.log(`Imprimir con for`);
    console.log(autos[i]);
}

console.log(autos);
console.log(autos[0].modelo);
