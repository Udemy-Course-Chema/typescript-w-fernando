import { getPokemon } from './generics/get-pokemon';



getPokemon(800)
    .then( pokemon => console.log( pokemon.sprites.front_default ) )
    .catch( err => console.log( err ) )
    .finally( () => console.log( 'Pokemon Ends' ) );

