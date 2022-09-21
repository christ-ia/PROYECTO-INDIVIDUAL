import React from 'react'
import { Routes, Route, } from "react-router-dom";
import { Home, About } from '../pokemon/pages/index';
import { NavBar } from '../pokemon/components/NavBar';
import { PokemonCardDetails } from '../pokemon/components';

export const RouterApp = () => {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path='about' element = {<About />} />
        <Route path='pokemons' element = {<Home />} />
        <Route path='pokemon/:pokeid' element = {<PokemonCardDetails />} />
        <Route path='/*' element={<Home />}/>
    </Routes>
    </>
  )
}
