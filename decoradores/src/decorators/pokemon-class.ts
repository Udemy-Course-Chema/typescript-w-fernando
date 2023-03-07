

function printToConsole( constructor:Function ){
    console.log( constructor );
    console.log( new constructor('Charizard') );
}

// Decoradores de fabrica - Factory Decoration
const printToConsoleConditional = ( print:boolean = false ): Function => {
    if( print ){
        return printToConsole
    }else{
        return () => {};
    }
    // return ( a:string ) => console.log( `Hello world, Text: ${ a }` );
}

const blockPrototype = function( constructor:Function ){
    console.log( 'En donde estoy ? ' );
    Object.seal( constructor );
    Object.seal( constructor.prototype );
};


function CheckValidPokemonID(){
    return function( target: any, propertKey: string, descriptor: PropertyDescriptor ){
        // console.log( { target, propertKey, descriptor } );
        // descriptor.value = () => console.log( 'hola mundo, donde estoy parte 2???? ' );
        const originalMethod = descriptor.value;
        descriptor.value = ( id:number ) => {
            if( id < 1 || id > 800){
                return console.error( 'El ID del pokemon debe de que estar entre 1 y 800' );
            }else{
                return originalMethod( id );
            }
        }
    }
}

function readOnly( isWritable:boolean = true):Function{
    return function(target:any, propertKey:string){
        const descriptor: PropertyDescriptor = {
            get(){
                console.log( this );
                return 'Chema'
            }
            set( this, val ){
                // console.log( this, val);
                Object.defineProperty( this, propertKey, {
                    value:val,
                    writable:!isWritable,
                    enumerable: false
                }); 
            }
        }
        return descriptor

    }
}



// @blockPrototype
// @printToConsoleConditional(true) 
export class Pokemon{
    @readOnly()
    public publicAPI:string = 'https://pokeapi.co'
    constructor(
        public name:string,
    ){}
    
    @CheckValidPokemonID()
    savePokemonToDB( id:number ){
        console.log( `Pokemon Guardado con éxito` );
    }
}