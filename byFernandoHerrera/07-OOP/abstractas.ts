
( () => {

    /**
     * Las clases abstractas sirven para crear otras clases 
     * ó para asegurarse de que otras clases implementen 
     * lo que yo espero. 
     */

    abstract class Mutante{
        constructor(
            public name:string, 
            public realName:string
        ){}

        public abstract atacar():void;
        public abstract bio():string;
    }

    class Xmen extends Mutante{
        
        public saveTheWorld(){
            return `Salvado el mundo con éxito`;
        }

        public atacar(): void {
            console.log( 'Atacando' );
        }

        public bio(): string {
            return `El nombre es: ${ this.name }`;
        }
    }

    class Villian extends Mutante{

        public atacar():void{
            console.log( 'El villano ataca' );
        }

        public bio():string{
            return `Soy villano: ${ this.name }`;
        }
        public destroyTheWorld(){
            return `Destruir el mundo con éxito`;
        }
    }


    // No se puede crear una instancia de la clase abstracta. 
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian( 'Magneto', 'Magnus' );
    console.log( wolverine.bio() );
    // console.log( wolverine );
    // console.log( wolverine.saveTheWorld() );
    // console.log( magneto );
    // console.log( magneto.destroyTheWorld() );

    // --------------------------------------------
    // Otros usos de la clase abstracta
    const printName  = (character:Mutante) => {
        console.log( character.realName );
    }

    printName( wolverine );

})()