import { Pokemon } from "./decorators";


const pokemon = new Pokemon('CHarizard');

// ( Pokemon as any ).prototype.customName = 'Pikachu';

console.log( pokemon.savePokemonToDB( 1 ) );


console.log(pokemon.publicAPI);

pokemon.publicAPI = 'Hola soy el invasor';

console.log(pokemon.publicAPI);