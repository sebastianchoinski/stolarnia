import React from 'react';
import './MainPage.scss'
import PhotoText from './PhotoText.jsx';
import Praises from './Praises.js';
import { gql, useQuery } from '@apollo/client';
import Services from './Services.jsx';
import AboutUs from './AboutUs.jsx';
import { Link } from "react-router-dom";

const GET_POSTS = gql`
query Posts {
    posts {
      description
      heading
      picture {
        url
      }
    }
  }
  `;



export default function MainPage(props) {
    
    const {loading, error, data} = useQuery(GET_POSTS)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log( loading, error)
    return (
        
        <div className='mainpagediv'>
          <Link to='/about'><a className='markheadera'><h1 className='markheader'></h1></a></Link>
          
          <hr className='abouthr'></hr>
            <Services></Services>
            <Link to='/projects'><a className='readmorea'><div className='readmore'><p>Zobacz nasze realizacje!</p></div></a>
            </Link>
            <div className="XX">
            <AboutUs></AboutUs>
            <div className='phototext'>
            <PhotoText data={data} ></PhotoText>
            </div>
            </div>
            <hr className='mainpagehr'></hr>
            <div className='praises'>
            <Praises></Praises>
            </div>
            <Link to='/contact'><a className='readmorea' ><div className='readmore'><p>Wyślij zapytanie!</p></div></a>
            </Link>
            
        </div>
    );
}

