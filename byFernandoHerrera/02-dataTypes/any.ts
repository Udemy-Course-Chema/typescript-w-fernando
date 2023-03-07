

/**
 * Tipos de datos: ANY 
 */

( ()=>{

    // Practica no recomendable
    let avenger:any = 10
    
    avenger = 'Iron Man';
    // Casting: Hay dos formas
    // La primera
    console.log( (avenger as string ).charAt(0) );

    avenger = 10.156891
    // La segunda
    console.log( <number>avenger.toFixed(2) );
})()