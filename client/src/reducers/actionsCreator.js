import { getPokemonsPage1 } from "../pokemon/helpers"
import { getPokemonTypes } from "../pokemon/helpers/getPokemonTypes";

export const initCharacters = ()=>{

    return async ( dispath)=>{
        dispath({type: 'FETCH_INIT_POKEMONS'})
        try {
            const allPokemons = await getPokemonsPage1();
            dispath({
                type: 'SUCCESS_FETCH_INIT_POKEMONS',
                payload: allPokemons,
            })
        } catch (error) {
            dispath({
                type: 'ERROR_FETCH_INIT_POKEMONS',
                payload: error
            })
            console.error(error.message);
        }

    }
}

export const orderFunc = (key, order)=>{
    if (order){
        return {
            type: 'ORDER_POKEMONS_ASC',
            payload:{
                key
            }
        }
    }
    return {
        type: 'ORDER_POKEMONS_DESC',
        payload:{
            key
        }
    }
}

export const filterByType = type => (dispath, getState)=>{//poison

    const {allPokemons} = getState();
    if (type=== 'All') return dispath({type: 'FILTER_BY_TYPE', payload: allPokemons})

    const filteredPokemon = allPokemons.filter(pokemon => {
        const pokemonTypes = getPokemonTypes(pokemon.types); //['poison', 'fire']
        return pokemonTypes.find(el => el === type.toLowerCase());
        //return type.toLowerCase() === pokemonTypes[0]
    })
    //[{}]
    return dispath({type: 'FILTER_BY_TYPE', payload: filteredPokemon});
}

export const filterByName = name => (dispath, getState)=>{

    const {allPokemons} = getState();

    console.log(name)
    const filteredPokemon = allPokemons.filter(pokemon => {
        console.log(pokemon.name)
        return pokemon.name.toLowerCase() === name.toLowerCase()

    })
    return dispath({type: 'FILTER_BY_NAME', payload: filteredPokemon});
}