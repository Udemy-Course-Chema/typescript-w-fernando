import { arrowFunction } from "../generics/generics"
import { Hero, Villains } from "../interfaces";
// import { Hero } from './interfaces/hero';
// import { Villains } from './interfaces/villains';

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wiston Wilson',
    dangerLevel:130
}


console.log( arrowFunction<Villains>(deadpool).dangerLevel ); 