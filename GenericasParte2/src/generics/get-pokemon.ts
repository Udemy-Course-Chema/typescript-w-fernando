/**
 * Genericas para Pokemon
 */
import axios from 'axios';
import { PokeApiRule } from '../interfaces';


export const getPokemon = async ( pokemonId:number ): Promise<PokeApiRule>=> {
    // const res = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon`);
    // const res = await axios.get<PokeApiRule>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    const { data } = await axios.get<PokeApiRule>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    

    return data;
    
}