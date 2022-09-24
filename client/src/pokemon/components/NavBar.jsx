import React from 'react'
import { NavLink } from "react-router-dom";

import './NavBarStyles.scss'
import { Search } from './Search';

export const NavBar = () => {
  return (
        <nav className='nav-bar'>
          <div className='nav-bar-links'>
            <h2 className='h2-logo'>Poke <span>Info</span></h2>
            <div>
                <NavLink 
                className={
                    ({isActive})=>`link${(isActive)?'-active':''}` 
                }
                to = 'pokemons'
                > Home </NavLink>
                <NavLink 
                className={
                    ({isActive})=>`link${(isActive)?'-active':''}` 
                }
                to = '/about'
                > About </NavLink>
            </div>
          </div>
          <div >
            <Search />
          </div>
      </nav>
  )
}
