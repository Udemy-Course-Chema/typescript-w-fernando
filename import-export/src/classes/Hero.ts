import { powers } from '../data/powers';
import { Rule } from '../data/rules';

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number
    ) { }
    
    get power(): Rule[] {
        console.log( "Salida con find: ", powers.find(item => item.id === this.powerId ) );
        console.log( "Salida con filter: ", powers.filter(item => item.id === this.powerId ) );
        return powers.filter( item => item.id === this.powerId );
    }

}

export class Hero2{}
export class Hero3{}
export class Hero4{}