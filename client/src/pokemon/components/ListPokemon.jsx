
import { PokemonCard } from './PokemonCard'
import './ListPokemon.scss'

export const ListPokemon = ({pokemonsPage}) => {
  
  return (
    <>
    <div className='container'>
      {
        pokemonsPage.map( el =>(
          <PokemonCard key={el.id} atk={el.stats[1].base_stat} name = {el.name} types = {el.types} id = {el.id} imgArt = {el.imgArt} />
        ))
      }
    </div>
    </>
  )
}
