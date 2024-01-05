import React from 'react';
import './MainPage.scss'
import PhotoText from './PhotoText.jsx';
import Praises from './Praises.js';
import { gql, useQuery } from '@apollo/client';
import Services from './Services.jsx';
import AboutUs from './AboutUs.jsx';

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
          <a href='/about'className='markheadera'><h1 className='markheader'></h1></a>
          <hr className='abouthr'></hr>
            <Services></Services>
            <a className='readmorea' href="/projects"><div href="/projects" className='readmore'><p>Zobacz nasze realizacje!</p></div></a>
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
            <a className='readmorea' href="/contact"><div href="/contact" className='readmore'><p>Wyślij zapytanie!</p></div></a>
            
        </div>
    );
}

