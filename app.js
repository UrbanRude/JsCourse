// Manejando Fechas en JavaScript

const diaHoy = new Date();

// FECHA EN ESPECIFICO
let navidad2017 = new Date('12-25-2017');

console.log(navidad2017);

let valor;

// MES  
valor = diaHoy.getMonth();

// DIA DEL MES
valor = diaHoy.getDate();
// DIA DE LA SEMANA
valor = diaHoy.getDay();

// MINUTOS
valor = diaHoy.getHours();

// MILISEGUNDOS DESDE 1970
valor = diaHoy.getTime();

// RETORNAR EL AÑO 
valor = diaHoy.getFullYear();   

// SETEAR EL AÑO
valor = diaHoy.setFullYear(2016);
valor = diaHoy.getFullYear();  

console.log(valor);
