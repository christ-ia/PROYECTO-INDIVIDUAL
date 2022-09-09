import React from 'react'
import { PokemonCard } from './PokemonCard'

import './cardsStyles.scss'
import { getPokemonsPage1 } from '../helpers/getPokemonsPage1'
import { useState } from 'react'
import { useEffect } from 'react'



export const ListPokemon = () => {

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
