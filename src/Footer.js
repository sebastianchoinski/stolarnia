import React from 'react';
import './Footer.scss'
import { Link } from "react-router-dom";
export default function Footer(props) {
    return (
        
<footer className="footer">
    <div className="footernav">
        <ul className="footerlinks">
            <Link to='/'><li className="footerlink"><a>Strona główna</a></li></Link>
            <Link to='/projects'><li className="footerlink"><a>Projekty</a></li></Link>
            <Link to='/about'><li className="footerlink"><a>O nas</a></li></Link>
            <Link to='/contact'><li className="footerlink"><a>Kontakt</a></li></Link>
            
            
            
            
        </ul>
    </div>
    <div className="footercontact">
        <p>E-mail: kontakt@manufaktura-stolar.pl</p>
        <p>Telefon: (123) 456-7890</p>
    </div>
    <hr className='footerhr'></hr>
    <div className="footerbottom">
        &copy; 2023 | MANUFAKTURA STOLAR
    </div>
</footer>
       
    );
}
