const initialState = {
    pokemons: [],
    isLoading: true,
    page:1
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
                isLoading: false
            }
        
        case 'ERROR_FETCH_INIT_POKEMONS':
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        case 'GET-POKEMONS':
            return {...state}
        case 'ORDER_POKEMONS':
            const order = action.payload.order;
            const key = action.payload.key;
            if (order){
                return {...state, pokemons: state.pokemons.sort((a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))};
            }
            return {...state, pokemons: state.pokemons.sort((b,a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0))};;
         
        default:
            return state;
    }

}