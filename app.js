// OBJETOS EN JAVASCRIPT
const persona = {
    nombre:'Urbano',
    apellido:'Ceron',
    profesion:'Desarrollador',
    email:'urbano@gmail.com',
    musica:['Ska','Regge','Pop'],
    edad:24,
    hogar:{
        ciudad:'Estado de Mexico',
        pais:'Mexico'
    },
    fechaNacimiento:function(){
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona);
console.log(persona.email);
console.log(persona.musica[1]);
console.log(persona.hogar.pais);
console.log(persona.fechaNacimiento());

