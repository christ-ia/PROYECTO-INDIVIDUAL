import { useDispatch } from "react-redux";

import { useOrder } from "../hooks/useOrder";
import { orderFunc } from "../reducerPokemon/actionsCreator";


import './styles/OrderPokemons.scss';

export const OrderPokemons = ({setCurrentPage}) => {

  const dispatch = useDispatch();
  const { key, order, setOrder, types, onChangeFilterType, onChangeOrderKey,onChangeUserCreation } = useOrder(setCurrentPage)
  return (
    <div className='container-orders'>
      <p>Order by:    </p>
        <select onChange={onChangeOrderKey}> 
            <option value="id" key='id'>Pokedex</option>
            <option value="attack" key='attack'>Attack</option>
            <option value="name" key='name'>Name</option>
        </select>
      <div className="container-orders__asc-desc-buttons">
          <button 
              onClick={()=>{         
                setOrder(true);
                dispatch(orderFunc(key, true));
                setCurrentPage(1)
              }}
              className={ `container-orders__asc-desc-buttons__btn${(order)?'-active':''}` }
          >↑
          </button>
          <button 
              onClick={()=>{
                setOrder(false);
                dispatch(orderFunc(key, false));
                setCurrentPage(1);
              }}
              className={ `container-orders__asc-desc-buttons__btn${(!order)?'-active':''}` }
          >↓
          </button>
      </div>
        <p>Filter by:</p>
        <select onChange={onChangeFilterType}> 
              {
                types.map((el,i)=>{
                  return <option value={el} key={i}>{el}</option>
                })
              }
        </select>

        <p>Show:</p>
        <select onChange={onChangeUserCreation}>
          <option value="All">All</option>
          <option value="Only_Pokedex">Only Pokedex</option>
          <option value="MyPokemons">My Pokemons</option>
        </select>
        
    </div>
  )
}
