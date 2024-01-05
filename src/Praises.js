import React from 'react';
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import './Praises.scss'

export default function Praises(props) {
    return (
        <div className='mainicondiv'>
            <div className='icondiv'>
            <img className='iconimg' src={icon1}></img>
            <p className='descriptiontext'>JAKOŚĆ</p>
            </div>
            
            <div className='icondiv'>
            <img className='iconimg'  src={icon2}></img>
            <p className='descriptiontext'>PROFESJONALIZM</p>
            </div>
            
            <div className='icondiv'>
            <img className='iconimg'  src={icon3}></img>
            <p className='descriptiontext'>KONTAKT Z KLIENTEM</p>
            </div>
            
        </div>
    );
}
