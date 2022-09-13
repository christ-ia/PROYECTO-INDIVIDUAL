
import { PokemonCard } from './PokemonCard'

import './cardsStyles.scss'

export const ListPokemon = ({pokemons}) => {
  

  return (
    <>
    <div className='container'>
      {
        pokemons.map( el =>(
          <PokemonCard key={el.id} atk={el.stats[1].base_stat} name = {el.name} types = {el.types} id = {el.id} imgArt = {el.imgArt} />
        ))
      }
    </div>
    </>
  )
}
