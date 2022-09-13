
import { ListPokemon, Search } from '../components/'
import './Home.scss'
import { getPokemonsPage1 } from '../helpers/getPokemonsPage1'
import { useState } from 'react'
import { useEffect } from 'react'
import { OrderPokemons } from '../components/OrderPokemons'

export const Home = () => {

  const [pokemons, setPokemons] = useState([])

  const getPage = async()=>{
    const arr=await getPokemonsPage1()
    setPokemons(arr);
  }

  useEffect(() => {
    getPage()
  }, [])

  return (
    <>
    <div className='container-head'>
      <h2>Todos los pokemons</h2>
      <Search pokemons = {pokemons} setPokemons = {setPokemons}/>  
    </div>
      <hr />
    <OrderPokemons pokemons={pokemons} setPokemons={setPokemons} />
    <hr />
      <ListPokemon pokemons={pokemons}/>
    </>
  )
}
