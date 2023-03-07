

( () => {
    
    
    const error = ( message:string):never => {
        throw new Error(message);
    }

    error(' NO SIRVE LA FUNCIÖN');

    console.log( 'A ver, que pedo ? ');


})()