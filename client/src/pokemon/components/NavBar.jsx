import React from 'react'
import { NavLink } from "react-router-dom";

import './NavBarStyles.scss'

export const NavBar = () => {
  return (
    <>
        <nav className='nav-bar'>
            <h2 className='h2-logo'>Poke <span>Info</span></h2>
        <div>
            <NavLink 
            className={
                ({isActive})=>`link${(isActive)?'-active':''}` 
            }
            to = ''
            > Home </NavLink>
            <NavLink 
            className={
                ({isActive})=>`link${(isActive)?'-active':''}` 
            }
            to = '/about'
            > About </NavLink>
        </div>
      </nav>
    
    </>
  )
}
