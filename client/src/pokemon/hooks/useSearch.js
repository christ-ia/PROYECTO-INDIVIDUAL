import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useSearch = () => {

    const {allPokemons} = useSelector(state=>state)
    const dispatch = useDispatch();
  
    const [input, setInput] = useState('');
    const [found, setFound] = useState(false);
    const [message, setMessage] = useState('');
  
  
    const onChangeInput = (e)=>{
      setInput(e.target.value)
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault()
        const filterName = allPokemons.filter(pokemon => {
        return pokemon.name.toLowerCase() === input.toLowerCase()
      })
  
      if (filterName.length) {dispatch({type:'FILTER_BY_NAME', payload:filterName }); setInput('');}
      else{
        setMessage(input);
        setInput('');
        setFound(true);
        setTimeout(()=>{
          setFound(false);
        }, 1500)
      }
    }
    
    return{
        input,
        message,
        found,
        onChangeInput,
        handleSubmit
    }

}
