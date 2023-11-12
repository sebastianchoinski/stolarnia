import React from 'react';
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import './Praises.scss'

export default function Praises(props) {
    return (
        <div className='main-icon-div'>
            <div className='icon-div'>
            <img className='icon-img' src={icon1}></img>
            <p className='description-text'>JAKOŚĆ</p>
            </div>
            
            <div className='icon-div'>
            <img className='icon-img'  src={icon2}></img>
            <p className='description-text'>PROFESJONALIZM</p>
            </div>
            
            <div className='icon-div'>
            <img className='icon-img'  src={icon3}></img>
            <p className='description-text'>KONTAKT Z KLIENTEM</p>
            </div>
            
        </div>
    );
}
