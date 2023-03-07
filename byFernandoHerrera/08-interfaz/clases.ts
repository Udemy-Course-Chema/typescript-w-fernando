/**
 * INTERFAZ EN LA CLASE 
 */

( () => {

    interface Xmen{
        name:string;
        realName: string;
        mutantPower( howMany:number): string;
    }
    
    interface Human{
        age:number;
    }

    class Mutant implements Xmen, Human{
        public name: string;
        public realName: string;
        public age:number;
        public powers:number;

        constructor( name:string, realName:string, age:number ){
            this.name = name;
            this.realName = realName;
            this.age = age;
        }

        set setPower(numberPower:number){
            this.powers = numberPower;
        }

        get getPower(){
            return this.powers;
        }

        public mutantPower(howMany: number): string {
            return `This mutant has ${ this.powers } powers`;
        }
    }

    const wolverine = new Mutant( 'Wolverine', 'Logan',40 );

    wolverine.setPower = 5;

    console.log( wolverine );
    console.log( wolverine.mutantPower(2) );

})()