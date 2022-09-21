import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pokemonReducer } from './reducers/pokemonReducer';


export const store = createStore(
    pokemonReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);
