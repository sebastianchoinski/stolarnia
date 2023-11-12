import React from 'react';
import Navbar from './Navbar.js'
import './MainPage.scss'
import PhotoText from './PhotoText.js';
import { useState } from 'react';
import Topbar from './Topbar.js';
import Praises from './Praises.js';


export default function MainPage(props) {
    
    return (
        
        <div>
            <PhotoText></PhotoText>
            <hr className='main-page-hr'></hr>
            <Praises></Praises>
        </div>
    );
}

