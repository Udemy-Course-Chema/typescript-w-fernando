
/**
 * ESTRUCTURAS COMPLEJAS    
 */

( () => {

    interface Client{
        name:string;
        age?:number;
        address?: Address;
    }

    interface Address{
        id:number;
        zip: string;
        city?: string;
    }

    const chema: Client = {
        name: 'Chema',
        age:30
    }

    const sara:Client = {
        name:'Sara',
        age:  40,
        address:{
            id: 1,
            zip: 'John 342',
            city: 'Oaxaca'

        }
    }

    console.log( chema );
    console.log( sara );


} )()