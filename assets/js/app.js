
/**
 *  VARIABLES
 */

const listaTweets = document.getElementById('lista-tweets');

/**
 * EVENTS LISTENERS
 */

eventListeners();

function eventListeners(){
    
    //Cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit',
        agregarTeewt);

    // Borrar tweets 
    listaTweets.addEventListener( 'click', borrarTweet);

    // Contenido cargado
    document.addEventListener( 'DOMContentLoaded', localStorageListo );

}

// Añadir teewt del formulario
function agregarTeewt(e){
    e.preventDefault();
    // Leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    
    // Crear boton de eliminar
    const btnBorrar = document.createElement('a');
    btnBorrar.classList = 'borrar-tweet';
    btnBorrar.innerText = 'X';
    
    // Crear el elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // Añade el boton de borrar al tweet
    li.appendChild( btnBorrar );
    // Añade el tweet a la lista    
    listaTweets.appendChild( li );

    // Añadir al local storage
    agregarTeewtLocalStorage( tweet );

}

// Elimina el tweet del DOM
function borrarTweet(e){
    e.preventDefault();

    if( e.target.className === 'borrar-tweet' ){
        e.target.parentElement.remove();
        borrarTweetLocalStorage( e.target.parentElement.innerText );
    } 

}

// Agrega el tweet al local storage
function agregarTeewtLocalStorage( tweet ){
    let tweets;

    // Obtiene los tweets y los asigna
    tweets = obtenerTweetsLocalStorage();
    
    // Añador el nuevo tweet al JSON
    tweets.push( tweet );

    // Agregar al Local Storage
    localStorage.setItem( 'tweets',JSON.stringify( tweets ) );

}

function obtenerTweetsLocalStorage(){
    let tweets;

    // Revisamos los valores del localStorage
    if( localStorage.getItem('tweets') == null ){
        tweets = [];
    } else {
        tweets = JSON.parse( localStorage.getItem( 'tweets' ) );
    }

    return tweets;
}

// Mostrar datos de LocalStorage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
        // Crear boton de eliminar
        const btnBorrar = document.createElement('a');
        btnBorrar.classList = 'borrar-tweet';
        btnBorrar.innerText = 'X';
        
        // Crear el elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // Añade el boton de borrar al tweet
        li.appendChild( btnBorrar );
        // Añade el tweet a la lista    
        listaTweets.appendChild( li );
    });

}

// Eliminar tweet del local storage
function borrarTweetLocalStorage( tweet ){
    let tweets,tweetBorrar;

    // Borrar la X del tweet
    tweetBorrar = tweet.substring( 0, (tweet.length - 1));

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach( (tweet,index) => {
        if( tweetBorrar === tweet ){
            tweets.splice( index,1 );
        }
    });

    localStorage.setItem( 'tweets', JSON.stringify( tweets ) );

}