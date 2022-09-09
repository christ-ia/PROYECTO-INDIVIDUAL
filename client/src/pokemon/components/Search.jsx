import { useState } from "react"


export const Search = () => {
  
  const [input, setInput] = useState('');

  const onChangeInput = (e)=>{
    setInput(e.target.value)
  }

  const onSubmit = (e)=>{
    e.preventDefault()
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
