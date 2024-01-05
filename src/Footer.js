import React from 'react';
import './Footer.scss'
export default function Footer(props) {
    return (
        
<footer className="footer">
    <div className="footernav">
        <ul className="footerlinks">
            <li><a href="/">Strona główna</a></li>
            <li><a href="projects">Projekty</a></li>
            <li><a href="about">O nas</a></li>
            <li><a href="contact">Kontakt</a></li>
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
