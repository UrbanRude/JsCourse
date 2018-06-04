// Funciones con JavaScript

// Funcion Declaration

function saludar(nombre = 'Visitante') {
    /* FORMA ANTIGUA
    if(typeof nombre === 'undefined'){
        nombre = 'Pablo';
    }*/
    console.log(`Huevos perro ${nombre}`);
} 

saludar();

function sumar(a,b){
    console.log(a + b);
}

sumar(8,4);

// Function expression 

const sumaEx = (a = 0 ,b = 0) =>{
    return a + b;
}

( function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`);
})('JavaScript');

console.log(sumaEx(3,2));
console.log(sumaEx(3));