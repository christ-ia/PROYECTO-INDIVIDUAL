
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderFunc } from "../../reducers/actionsCreator";
import './OrderPokemons.scss';


export const OrderPokemons = ({types}) => {

  const dispatch = useDispatch();

  const [key, setKey] = useState('id');
  const [order, setOrder] = useState(true);


  const onChangeOrder = event => {
    dispatch(orderFunc(event.target.value, order));
    setKey(event.target.value);
  }
  const onChangeFilter = event =>{

  }
  return (
    <div className='container-orders'>
      <p>Order by:    </p>
        <select onChange={onChangeOrder}> 
            <option value="id" key='id'>Pokedex</option>
            <option value="atk" key='atk'>Attack</option>
            <option value="name" key='name'>Name</option>
        </select>
      <div className="container-orders__asc-desc-buttons">
          <button 
              onClick={()=>{         
                setOrder(true);
                dispatch(orderFunc(key, true));
              }}
              className={ `container-orders__asc-desc-buttons__btn${(order)?'-active':''}` }
          >↑
          </button>
          <button 
              onClick={()=>{
                setOrder(false);
                dispatch(orderFunc(key, false));
              }}
              className={ `container-orders__asc-desc-buttons__btn${(!order)?'-active':''}` }
          >↓
          </button>
      </div>
        <p>Filter by:    </p>
        <select > 
              {
                types.map((el,i)=>{
                  return <option value="el" key={i}>{el}</option>
                })
              }
        </select>

        
    </div>
  )
}
