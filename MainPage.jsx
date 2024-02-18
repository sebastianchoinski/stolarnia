import React from 'react';
import './MainPage.scss'
import PhotoText from './PhotoText.jsx';
import Praises from './Praises.js';
import { gql, useQuery } from '@apollo/client';
import Services from './Services.jsx';
import AboutUs from './AboutUs.jsx';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import stolarlogo from './logo.png'
import Process from './Process.jsx'
import Topbar from './Topbar.js';

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
      <div>
      <Topbar></Topbar>
        <div className='mainpagediv'>
          
          <Helmet>
        <title>Manufaktura Stolar</title>
        <meta name="description" content="Strona Manufaktury Stolar. Wejdź i dowiedz się więcej!"></meta> 
          </Helmet>
        
            <div className='praises'>
            <Praises></Praises>
            </div>
            <Services></Services>
            <Process></Process>
          
          <hr className='abouthr'></hr>
            
            <Link to='/projects'><div className='readmore'><p>Zobacz nasze realizacje!</p></div>
            </Link>
            <div className="XX">
            <AboutUs></AboutUs>
            <div className='phototext'>
            <PhotoText data={data} ></PhotoText>
            </div>
            </div>
            <hr className='mainpagehr'></hr>
            <Link to='/contact'><a className='readmorea' ><div className='readmore'><p>Wyślij zapytanie!</p></div></a>
            </Link>
        </div>
        </div>
    );
}

