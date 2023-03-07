// PARÁMETROS REST

( () => {

    const fullName = (first:string, ...args:string[]) => {
        return `${ first } ${ args.join(' ')?.toUpperCase() }`;
    }

    const superman = fullName( 'Clark', 'Joseph','Kent');
    console.log( superman );
})()