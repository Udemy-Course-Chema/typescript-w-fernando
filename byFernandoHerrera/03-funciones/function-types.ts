( () => {

    const addNumbers = (a:number, b:number):number => a + b;
    const greet = (name:string):string => `Hola ${ name }`;
    const saveTheWorld = ():string => `El mundo está salvado`;

    // let myFunction: Function;
    //* Funcion 1 let myFunction: (x:number, y:number) => number;
    //* Funcion 2 let myFunction: (a:string) => string;
    let myFunction: () => string; //* Función 3


    // No acepta
    // myFunction = 10;
    // console.log( myFunction );

    //* Funcion 1
    //* myFunction = addNumbers;
    //* console.log( myFunction(1,2) );

    //  * Funcion 2
    //* myFunction = greet;
    //* console.log( myFunction('JOhn') );

    //* Función 3
    myFunction = saveTheWorld;
    console.log( myFunction() );
})()