
( () => {
    
    class Avenger{
        // Atributos
        // private name: string;
        // public team: string;
        // Es lo mismo sin poner "public", sin embargo es mala práctica
        // realName: string;
        // public realName?: string;
        static avgAge:number = 35;
        static myPi:number = 3.1416;

        constructor( private name:string, 
                     public team:string, 
                     public realName?:string){
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }

        // Por default, sin la palabra public, se convierte en público.
        public bio():string {
            return `${ this.name } ( ${ this.team } )`;
        }

        // Método privado
        private action():string{
            return `Accionando pero en secreto`;
        }

        // Método Estático
        static llamarLaNave():string {
            return 'Allá voy a recoger a ustedes';
        }



    }

    const antman: Avenger = new Avenger('Iron Man','Iron','Tony Stark');

    console.log( antman );
    // console.log( Avenger.avgAge );
    console.log( antman.bio() );
    console.log( "Mi pi es: ", Avenger.myPi );
    console.log( Avenger.llamarLaNave() );
})()