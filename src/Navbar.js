import React from 'react'
import logo from './logo.png'
import './Navbar.scss'
import phoneicon from './phoneicon.png'
import { Link } from "react-router-dom";
export default function Navbar() {
    return(
        <div className='mainnavbardiv'>
            <img className='logo' src={logo}></img>
            <div className='wycena'><p>WYCENA W 24H</p></div>
            <ul className="navlinks">
            <Link to="/"><li className='navlink'> <a>Strona główna</a> </li></Link>
            <Link to="/projects"><li className='navlink'> <a>Projekty</a> </li></Link>
            <Link to="/about"><li className='navlink'> <a>O nas</a> </li></Link>
            <Link to="/contact"><li className='navlink'> <a>Kontakt</a> </li></Link>                                                    
            </ul>
            <div className='phonenumber'><img className="phoneicon" src={phoneicon}></img><a>+48 XXX XXX XXX</a></div>
        </div>
    )
}


