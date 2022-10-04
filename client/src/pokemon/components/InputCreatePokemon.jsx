import { useState } from "react";

export const InputCreatePokemon = ({inputState, setInputState, label, placeholder, type, errMessage, condition, isUnique}) => {
  
  const [message, setMessage] = useState(errMessage);

  const handleChange = event=>{
    setInputState({...inputState, value: event.target.value})
  };
 
  const verif = () => {
    if(condition){
      condition.test(inputState.value)
              ? setInputState({...inputState, isValid: true})
              : setInputState({...inputState, isValid: false})
    }
    if(isUnique){
      const value = isUnique.filter( el => el.name.toLowerCase() === inputState.value.toLowerCase());
      if(value.length){
        setInputState({...inputState, isValid:false})
        setMessage('This pokemon name already exist.')
      }else{
        setMessage(errMessage)
      }
    }
  }
  return (
    <>
            <label className = 'create-pokemon__label' htmlFor = {label}> {label} :</label>
            <input 
              value={inputState.value}
              onChange= {handleChange}
              className={
                `create-pokemon__input${ 
                  (inputState.isValid === null)
                      ? ''
                      :inputState.isValid?'-success'
                      :'-error'
                }`
              }
              id={label}
              type={type} 
              min="1"
              placeholder={placeholder}
              onKeyUp={verif}
              onBlur= {verif} 
            />

            <p className={
              `create-pokemons__input-message${
                (inputState.isValid === false)?'-enabled':''
              }`
            }>{message}</p>
    </>
  )
}
