

( () => {

    const fullName =  (first:string, second?:string, upper:boolean = false):string => {
        if(upper){
            return `${ first }, ${ second }`.toUpperCase();
        }else{
            return `${ first }, ${ second }`;
        }
    }

    const nombre = fullName('John', 'Wick', true);
    const nombre2 = fullName('John', undefined, true);
    console.log( nombre );
    console.log( nombre2 );

})()