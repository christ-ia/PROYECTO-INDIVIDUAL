import { useSearch } from '../hooks/useSearch';
import './styles/Search.scss'

export const Search = () => {

  const{input, message, onChangeInput, handleSubmit, found } = useSearch()

  return (
    <div className='search-container'>
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

      {found && <h5 className= 'pokemon-not-found'>{`pokemon : ${message} not found!`}</h5>}
      </form>
    </div>
  )
}
