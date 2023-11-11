import React from 'react'
import './Navbar.scss'
export default function Navbar() {
    return(
        <div className='main-navbar-div'>
            <ul className="nav-links">
                <li className='nav-link'> <a href='/Projekty'>Strona główna</a> </li>
                <li className='nav-link'> <a href='/Projekty'>Projekty</a> </li>
                <li className='nav-link'> <a href='/Projekty'>O nas</a> </li>
                <li className='nav-link'> <a href='/Projekty'>Kontakt</a> </li>
            </ul>
        </div>
    )
}


