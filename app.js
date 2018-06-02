//ARREGLOS

// ARREGLO DE INT
const numeros = [10,23,4,3,14,65,7,23];
console.log(numeros);

//ARREGLO MEZCLADO
// const mezclado = [true,'true',20,'Hello',24.2];
// console.log(mezclado);

//ARREGLO DE ENTEROS
const meses =  new Array('Enero','Febrero','Marzo','Abril');
console.log(meses);
console.log(meses.length);
console.log(Array.isArray(meses));

//AGREGAR UN ELEMENTO AL FINAL EN UN ARREGLO 
meses.push('Mayo');
console.log(meses);
console.log(meses.length);
console.log(Array.isArray(meses));

//ENCONTRAR UN ELEMENTO DENTRO DEL ARREGLO 
console.log(meses.indexOf('Abril'));

//AGREGAR UN ELEMENTO AL INICIO EN UN ARREGLO 
meses.unshift('Prueba');
console.log(meses);

//ELMINAR EL ULTIMO ELEMENTO DE UN ARREGLO
meses.pop();
console.log(meses);

//ELIMINAR EL PRIMER ELEMENTO DE UN ARREGLO
meses.shift();
console.log(meses);

//ELIMINAR UN ELEMENTO EN ESPECIFICO
meses.splice(3,1);
console.log(meses);

//REVERTIR UN ARREGLO
meses.reverse();
console.log(meses);

//UNIR ARREGLOS
console.log(numeros.concat(meses));

//ORDENAR UN ARREGLO
const frutas = ['Zanahoria','Platano','Manzana','Fresas','Naranja'];
frutas.sort();
console.log(frutas);

//ORDENAR UN ARREGLO DE MENOR A MAYOR
numeros.sort((a,b) => {
    return a - b;
});
console.log(numeros);

//ORDENAR UN ARREGLO DE MAYOR A MENOR
numeros.sort((a,b) => {
    return b - a;
});
console.log(numeros);




