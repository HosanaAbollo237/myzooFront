import React from 'react'
import banderole from './../../../../public/assets/banderole.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return(
        <>
            <div> <img src={banderole} alt="" /> </div>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/animals">Animaux</NavLink></li>
                <li><NavLink to="/continents">Contients</NavLink></li>
            </ul>
        </>
    )
}

export default NavBar