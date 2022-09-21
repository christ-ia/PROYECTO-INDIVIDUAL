import { useState } from 'react';

export const Search = ({pokemons, setPokemons}) => {
  
  const [input, setInput] = useState('');


  const onChangeInput = (e)=>{
    setInput(e.target.value)
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    let searchPokemons = [...pokemons]
    setPokemons( searchPokemons.filter(el => el.name === input) );
  }

  return (
    <form 
      onSubmit={onSubmit}
    >

      <input 
        type="text"
        value={input}
        onChange = {onChangeInput}
        placeholder='Ingresa el nombre del pokemon'
         />
      <input type="submit" />

    </form>
  )
}
