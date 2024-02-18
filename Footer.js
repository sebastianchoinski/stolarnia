import React from 'react';
import './Footer.scss'
import facebook from './facebook.webp';
import instagram from './insta.webp';
import tiktok from './tiktok.png'
import { Link } from "react-router-dom";
export default function Footer(props) {
    return (
        
<footer className="footer">
    <div className='footerdiv'>
        <div className='footersocialmedia'>
            <a>
            <div className='singlesocial'>
                <a><img className='socialimage' src={instagram}></img></a>
                <p className='socialtext'>Instagram</p>
            
            
            </div>
            </a>
            <a><div className='singlesocial'>
                <a><img className='socialimage' src={facebook}></img></a>
                <p className='socialtext'>Facebook</p>
                
            </div>
            </a>

            <a><div className='singlesocial'>
                <a><img className='socialimage' src={tiktok}></img></a>
                <p className='socialtext'>TikTok</p>
                
            </div>
            </a>


        </div>

        <div className='footerpages'>
            <a href='/'>Strona główna</a>
            <a href='/projects'>Oferta</a>
            <a href='/about'>O nas</a>
            <a href='/contact'>Kontakt</a>
        </div>
        <div className='footerinfo'>
            <p className='socialtext'>Warszawa</p>
            <p className="socialtext">kontakt@manufaktura-stolar.pl</p>
           
            
            <a className='socialtext' href="tel:797-953-031">+48 797 953 031</a>
        </div>
        </div>
</footer>
       
    );
}
