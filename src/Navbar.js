import React from 'react'
import logo from './logo.png'
import './Navbar.scss'
import phoneicon from './phoneicon.png'
export default function Navbar() {
    return(
        <div className='mainnavbardiv'>
            <img className='logo' src={logo}></img>
            <div className='wycena'><p>WYCENA W 24H</p></div>
            <ul className="navlinks">
                <li className='navlink'> <a href='/'>Strona główna</a> </li>
                <li className='navlink'> <a href='/projects'>Projekty</a> </li>
                <li className='navlink'> <a href='/about'>O nas</a> </li>
                <li className='navlink'> <a href='/contact'>Kontakt</a> </li>
                <li className='navlink'> <a href='/blog'>Blog</a> </li>
            </ul>
            <div className='phonenumber'><img className="phoneicon" src={phoneicon}></img><a>+48 XXX XXX XXX</a></div>
        </div>
    )
}


