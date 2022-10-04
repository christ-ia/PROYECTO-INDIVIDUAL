import { useEffect, useState } from "react";
import { getTypes } from '../helpers';

export const CheckBoxCreatePokemon = ( { newPokemonType, setNewPokemonType, validate}) => {

    const [types, setTypes] = useState([]);
    const [isChecked, setIsChecked] = useState([])
    
    const handleChangeCheckbox = event =>{
        const typeChecked = event.target.value;
        const checked = event.target.checked;
        const id = parseInt(event.target.id);
    
        if(checked){
          let updateIsCheckedTrue = isChecked.map( (el,i)=> {
    
            if (i === id) return true;
            return el;
          } )
          setIsChecked(updateIsCheckedTrue)
          setNewPokemonType([...newPokemonType, typeChecked]);
          validate(true)
            if(newPokemonType.length > 0 && newPokemonType.length < 2) {
              validate(true);
            }else validate(false)
        }else{
          setNewPokemonType( newPokemonType.filter(el=> el !== typeChecked));
          let updateIsCheckedFalse = isChecked.map( (el,i)=> {
            if (i === id) return false;
            return el;
          } )
          setIsChecked(updateIsCheckedFalse);
          if(newPokemonType.length === 1 ) validate(false);
          
        }
  }

      useEffect(() => {
        const getAllTypes = async ()=>{
          const arr = await getTypes();      
          setTypes(arr)
          setIsChecked(new Array(arr.length).fill(false))
        }
        getAllTypes();
      }, [])

  return (
    < >
        <p className='check-box-title'>Type: </p>
          {types.map( (el,i)=>(
          <div key={i} ><input type="checkbox" onChange={handleChangeCheckbox} name="type" value={el} id={i} disabled={newPokemonType.length > 1 && !isChecked[i]} /> <label htmlFor={i}> {el}</label></div> 
          ))}
       
    </>
  )
}
