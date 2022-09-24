const initialState = {
    pokemons: [],
    allPokemons: [],
    isLoading: true,
    // page:1
}

export const pokemonReducer = (state=initialState, action)=>{
    switch (action.type) {
        case 'FETCH_INIT_POKEMONS':
            return {
                ...state,
                isLoading: true
            };
        case 'SUCCESS_FETCH_INIT_POKEMONS':
            return{
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                isLoading: false
            }
        
        case 'ERROR_FETCH_INIT_POKEMONS':
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        
        case 'GET_ALL_POKEMONS':
            return{
                ...state,
                pokemons: state.allPokemons
            }

        case 'ORDER_POKEMONS_ASC':
            const key = action.payload.key;
            return {...state, pokemons: state.pokemons.sort((a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))};
          
        case 'ORDER_POKEMONS_DESC':
            const keyDesc = action.payload.key;

            return {...state, pokemons: state.pokemons.sort((b,a) => (a[keyDesc] > b[keyDesc] ? 1 : a[keyDesc] < b[keyDesc] ? -1 : 0))};;
        

        case 'FILTER_BY_TYPE':
            return {
                ...state,
                pokemons: action.payload
            }
            
        case 'FILTER_BY_NAME':
            return{
                ...state,
                pokemons: action.payload
            }

        default:
            return state;
    }

}