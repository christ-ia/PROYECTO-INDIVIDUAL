import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pokemonReducer } from './pokemon/reducers/pokemonReducer';


export const pokemonStore = createStore(
    pokemonReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);
