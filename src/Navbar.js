import React from 'react'
import './Navbar.scss'
export default function Navbar() {
    return(
        <div className='main-navbar-div'>
            <ul className="nav-links">
                <li className='nav-link'> <a href='/'>Strona główna</a> </li>
                <li className='nav-link'> <a href='/projects'>Projekty</a> </li>
                <li className='nav-link'> <a href='/about'>O nas</a> </li>
                <li className='nav-link'> <a href='/contact'>Kontakt</a> </li>
            </ul>
        </div>
    )
}


