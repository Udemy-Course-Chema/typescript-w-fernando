// Exportación 1
import { Hero, Hero2 as SuperHero2, Hero3 as SuperHero3, Hero4 } from './classes/Hero';
// Exportación 2
// import * as Heroes from './classes/Hero';
// import { powers } from './data/powers';
// import power2 from './data/powers';

console.log('Hola Mundo!');


const hero = new Hero( 'Batman',1, 40 );

// Exportación 1
// const miVar = new SuperHero2();

// Exportación 2
// const miVar2 = new Heroes.Hero4();

hero.powerId = 1;

console.log( hero.power );
// console.log( powers );
// console.log( power2 );





