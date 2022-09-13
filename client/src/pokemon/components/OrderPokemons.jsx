
import { useState } from "react";
import './OrderPokemons.scss'

export const OrderPokemons = ({pokemons, setPokemons}) => {

    const [key, setKey] = useState('id')
    const [order, setOrder] = useState(true)

    const orderFunc = (key, order)=> {            
          order
          ? setPokemons([...pokemons].sort((a,b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)))
          : setPokemons([...pokemons].sort((b,a) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)))
    }    
  return (
    <div className='container-orders'>
      <button 
        onClick={()=>{ orderFunc('id', order); setKey('id');}}
        className={ `container-orders__btn${(key === 'id')?'-active':''}` }
      >
        pokedex
      </button>
      <button 
        onClick={()=>{ orderFunc('atk', order); setKey('atk')}}
        className={ `container-orders__btn${(key === 'atk')?'-active':''}` }
        >
        attack
      </button>
      
      <button 
        onClick={()=>{ orderFunc('name', order);setKey('name')}}
        className={ `container-orders__btn${(key === 'name')?'-active':''}` }
      >name</button>
      
      <button 
        
        onClick={()=>{
          
          setOrder(true);
          orderFunc(key,true);

        }}
        className={ `container-orders__btn${(order)?'-active':''}` }
        >ASC</button>
      <button 
        onClick={()=>{
          
          setOrder(false);
          orderFunc(key, false);

        }}
        className={ `container-orders__btn${(!order)?'-active':''}` }
        >DESC</button>
    </div>
  )
}
