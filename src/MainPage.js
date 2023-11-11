import React from 'react';
import Navbar from './Navbar.js'
import mainpagetopphoto from './main-page-top-photo.jpg'
import './MainPage.scss'
import PhotoText from './PhotoText.js';

import { useState } from 'react';


export default function MainPage(props) {
    
    return (
        
        <div>
            <div className='photo-container'><img
            src={mainpagetopphoto}
            className='main-page-top-photo'
            ></img><p className='photo-text-title'>divi carpentry.<br/>
            beatifully build
            </p>
            
            </div>
            <Navbar></Navbar>
            <PhotoText 
            photoheader="Meble kocham meble"
            phototxt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."    
            photosrc={mainpagetopphoto}>
            </PhotoText>

        </div>
    );
}

