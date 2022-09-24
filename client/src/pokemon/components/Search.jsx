import { useDispatch } from 'react-redux';
import refreshLogo from '../assets/refresh.png'
import { useSearch } from '../hooks/useSearch';
import './Search.scss'

export const Search = () => {

  const dispatch = useDispatch();

  const{input, onChangeInput, handleSubmit, found } = useSearch()

  return (
    <div className='search-container'>
    
       <img 
          src={refreshLogo} 
          alt="refresh"
          className='search-refresh-icon'
          onClick={()=>dispatch({type:'GET_ALL_POKEMONS'})}
       />
      <form 
        onSubmit={handleSubmit}
        className='search-form'
      >

        <input 
          type="text"
          value={input}
          onChange = {onChangeInput}
          placeholder='Search pokemon by name'
          />
        <input type="submit" />

      </form>
      {found && <h5 className= 'pokemon-not-found'>{`pokemon : ${input} not found!`}</h5>}
    </div>
  )
}
