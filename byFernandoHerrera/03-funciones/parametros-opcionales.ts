// Parámetros/Argumentos Opcionales

( () => {


    const fullName = (first:string, second?:string):string => {
        return `${ first } ${ second }`
    }

    const name = fullName('John');

})()