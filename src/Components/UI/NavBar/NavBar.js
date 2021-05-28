import React from 'react'
import NavCss from '../../../../public/css/navCss.css'
import ImgCss from '../../../../public/css/imgCss.css'
import banderole from './../../../../public/assets/banderole.png'
import { NavLink } from 'react-router-dom'

const NavBar = () => {

    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/animals">Animals</NavLink></li>
                <li><NavLink to="/continents">Continents</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <img className="navImg" src={banderole} alt="" />
        </nav>
    )
}

export default NavBar