import { getPokemonsPage1 } from "../pokemon/helpers"

export const initCharacters = ()=>{

    return async (dispath)=>{
        dispath({type: 'FETCH_INIT_POKEMONS'})
        try {
            const allCharacters = await getPokemonsPage1();
            dispath({
                type: 'SUCCESS_FETCH_INIT_POKEMONS',
                payload: allCharacters,
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
    return {
        type: 'ORDER_POKEMONS',
        payload:{
            key,
            order
        }
    }
}