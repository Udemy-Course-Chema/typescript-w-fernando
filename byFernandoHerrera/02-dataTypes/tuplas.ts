
/**
 * EN JAVASCRIPT NO EXISTEN TUPLAS, SÓLO TYPESCRIPT
 */

(()=>{
    // Así se ve Tupla
    const hero: [ string, number ] = [ "hola", 100 ];
    // No puedes dejar en vacío.
    // const prueba: [string, number, boolean] = []; 
    hero.push(200);
    hero.push(100);

    // ¿Cuál es la diferencia?
    // No se puede asignar a un valor que no sea del mismo tipo de datos.
    // hero[0] = true;
    // Y este si asigna el mismo tipo de datos. 
    hero[0] = " Hello world";
    console.log( hero );

    // prueba.push( "otro" );
    // prueba.push( 10000);
    // prueba.push( false );
})()

