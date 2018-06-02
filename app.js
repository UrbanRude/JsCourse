
let nombre = prompt('Cual es tu nombre');
let edad = prompt('Cual es tu edad');

document.getElementById('app').innerHTML = `Bienvenido ${nombre.toUpperCase()} y tu edad es ${edad} y tu nombre tiene ${nombre.length} letras`;

//MANEJO DE STRING Y SUS METODOS

let mensaje = 'Aprendiendo JavaScript, CSS, HTML para Frontend';

//SUBSTRAER DE UNA CADENA
console.log(mensaje.substring(0,11));

//COLOCAR UN NUMERO NEGATIVO EMPIEZA DE LA DERECHA A LA IZQUIERDA
console.log(mensaje.slice(-11));

//CON DOS PARAMETROS EL PRIMERO ES PARA IDICAR DONDE EMPIEZA Y EL SEGUNDO SON LOS ELEMENTOS A CORTAR
console.log(mensaje.slice(0,11));

//PARA SEPARAR UNA CADENA CADA VEZ QUE ENCUENTRE UN CARACTER, REGRESA UN CARACTER
console.log(mensaje.split(' '));
console.log(mensaje.split(', '));

//PARA REMPLAZAR 
console.log(mensaje.replace('CSS','PHP'));

//PARA ENCONTRAR UNA CADENA DE TEXTO DENTRO DE OTRA CADENA
console.log(mensaje.includes('HTML'));

//REPETIR LA CADENA
let repetir = 'JavaScript';
console.log(repetir.repeat(10));
