
import { PokemonCard } from './PokemonCard'

import './ListPokemon.scss'

export const ListPokemon = ({filteredPokemons}) => {
  

  return (
    <>
    <div className='container'>
      {
        filteredPokemons.map( el =>(
          <PokemonCard key={el.id} atk={el.stats[1].base_stat} name = {el.name} types = {el.types} id = {el.id} imgArt = {el.imgArt} />
        ))
      }
    </div>
    </>
  )
}
