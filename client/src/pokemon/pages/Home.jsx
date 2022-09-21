import { ListPokemon, OrderPokemons } from '../components/'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { initCharacters } from '../../reducers/actionsCreator'
import { getTypes } from '../helpers';
import './Home.scss'
import { filter } from '../helpers/filter';
import { IsLoading } from '../components/IsLoading';

export const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState('All');
  const [order, setOrder] = useState(true);
  const [key, setKey] = useState('id');
  const dispatch = useDispatch();
  const {pokemons, isLoading} = useSelector(state => state);

  const filteredPokemons = filter(type, currentPage, pokemons, order, key );

  useEffect(() => {
    const getData = async()=>{
      const arr = await getTypes();
      setTypes(arr);
    }
    getData();
  }, []);

  useEffect(() => {
    dispatch(initCharacters())
  }, [dispatch]);


  if (isLoading) return <IsLoading />

  return (
    <>

    <div className='container-head'>
      <h2>Pokedex</h2>
      {/* <Search />   */}
      {/* <OrderPokemons types= {types}/> */}
    </div>

    <hr />

    <ListPokemon filteredPokemons={filteredPokemons} />

    </>
  )
}
