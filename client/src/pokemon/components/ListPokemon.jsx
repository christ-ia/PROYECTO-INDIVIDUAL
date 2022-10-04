
import { PokemonCard } from './PokemonCard';
import './styles/ListPokemon.scss';

export const ListPokemon = ({pokemonsPage}) => {
  
  return (
    <>
    <div className='container'>
      {
        pokemonsPage.map( el =>(
          <PokemonCard key={el.id} attack={el.attack} name = {el.name} types = {el.Types} id = {el.id} imgArt = {el.imgArt} />
        ))
      }
    </div>
    </>
  )
}
