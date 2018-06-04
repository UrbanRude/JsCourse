// MANEJANDO ERRORES CON TRY-CATCH

try {
    funcionFake();
} catch (error) {
    console.log(error);
}finally{
    console.log('Se ejecuta siempre');
}


function obtenerClientes(){
    console.log('Descargando');
    setTimeout( () => {
        console.log('Completo');
    },3000);
}



obtenerClientes();