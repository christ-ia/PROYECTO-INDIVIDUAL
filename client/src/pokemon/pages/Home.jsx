import { ListPokemon, OrderPokemons } from '../components/'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { initCharacters } from '../../reducers/actionsCreator'
import './Home.scss'
import { IsLoading } from '../components/IsLoading';
import { Pagination } from '../components/Pagination'

export const Home = () => {


  const {pokemons} = useSelector(state => state);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPokemon = currentPage * 12;
	const indexOfFirstPokemon = indexOfLastPokemon - 12;
	const pokemonsPage = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state);

  useEffect(() => {
    dispatch(initCharacters())
  }, [dispatch]);


  if (isLoading) return <IsLoading />

  return (
    <>

    <div className='container-head'>
      <h2>Pokedex</h2>
      <OrderPokemons setCurrentPage={setCurrentPage} />
    </div>

    <hr />
    { (pokemons.length > 24) && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPokemons = {pokemons.length} />}
    <ListPokemon pokemonsPage = {pokemonsPage} />
    { (pokemons.length > 24) && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPokemons = {pokemons.length} />}
    
    </>
  )
}
