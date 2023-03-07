

( () => {


    const fullName = (first:string, second:string):string => {
        return `${ first } ${ second }`
    }

    const isObligatorio = (first:string, second:string, third:number = 0):string => {
        return  `${first}, ${ second } son obligatorios, mientas que el ${ third } no lo es.`
    }

    const name = fullName('John', 'Wick');

    const w = isObligatorio('hola', 'dos');

    console.log( w );
})()