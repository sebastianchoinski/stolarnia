import React from 'react';
import './Topbar.scss'
import mainpagetopphoto from './main-page-top-photo.jpg'
import Navbar from './Navbar.js';
import { gql, useQuery } from '@apollo/client';

const GET_IMAGE = gql`
query MyQuery {
    topPhotos {
      image {
        url
      }
    }
  }
  `

export default function Topbar(props) {
    const {loading, error, data} = useQuery(GET_IMAGE)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
          <Navbar></Navbar>
            <div className='photo-container'><img
            src={data.topPhotos[0].image.url}
            className='main-page-top-photo'
            ></img><p className='photo-text-title'>TWORZYMY <br/>
            z PASJĄ <br/>
            SZAFY, PODŁOGI i INNE
            </p>
            <a className='about-link' href='/about'>
              <div className='about'><p className='about-text'>Przeczytaj o nas!</p></div>
            </a>
            </div>
        </div>
    );
}

