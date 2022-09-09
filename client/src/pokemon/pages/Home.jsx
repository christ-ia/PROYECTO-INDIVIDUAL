
import { ListPokemon, Search } from '../components/'
import './Home.scss'

export const Home = () => {
  return (
    <>
    <div className='container-head'>
      <h2>Todos los pokemons</h2>
      <Search />  
    </div>
      <hr />
      <ListPokemon />
    </>
  )
}
