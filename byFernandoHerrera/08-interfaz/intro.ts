
/**
 * lAS INTERFACES PERMITE CREAR REGLAS
 * O PLANOS DE COMO SE DEBEN DE CONSTRUIR 
 * CLASES, MÉTODOS U OBJETOS.
 */

( () => {

    interface Hero {
        name:string;
        age?: number;
        powers: string[];
        getName?: () => string;
    }

    const flash:Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Velocidad', 'Viajar el tiempo']
    }

    console.log( flash );

})()