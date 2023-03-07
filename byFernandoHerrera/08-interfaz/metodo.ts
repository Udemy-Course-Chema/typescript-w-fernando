
/**
 * Interfaz en el método
 */
( () => {

    interface Client{
        name: string;
        age?: number;
        address?: Address;
        getFullName( id:number ): void;
    }
    interface Address{
        id:number;
        zip: string;
        city: string;
    }

    const cliente: Client = {
        name: 'John',
        age:25,
        getFullName( id ){
            console.log( `This name is: ${ this.name } and has ${ this.age } years old`);
        }
    }

    console.log( cliente.getFullName( 1 ) );

})()