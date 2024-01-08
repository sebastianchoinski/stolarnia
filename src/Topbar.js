import React from 'react';
import './Topbar.scss'
import mainpagetopphoto from './main-page-top-photo.jpg'
import   Navbar  from './Navbar.jsx';
import { gql, useQuery } from '@apollo/client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";




const GET_IMAGE = gql`
query MyQuery {
    topPhotos {
    toptext
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
    const settings = {
      fade: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: false
    };  

    return (
        <div >
          <Navbar></Navbar>
          
          <Slider className='sliderdiv' {...settings}>
            {data? data.topPhotos.map((data) => (
              <div className='photo-container'>
                <img src={data.image.url} className='main-page-top-photo'></img>
              <div className='topphototext'>
              <p className='phototexttitle'>{data.toptext}</p>
                <div className='about'><p className='abouttext'>Przeczytaj o nas!</p></div>
                </div>
              </div>
            ) ): null}
            </Slider>
            <p className='wycena'>WYCENA W 24H!</p>
            
        </div>
    );
}

