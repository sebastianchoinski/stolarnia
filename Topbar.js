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
import { Link } from "react-router-dom";



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
          
          
          
          <Slider className='sliderdiv' {...settings}>
            {data? data.topPhotos.map((data) => (
              <div className='photo-container'>
                <img src={data.image.url} className='main-page-top-photo'></img>
              <div className='topphototext'>
              <p className='phototexttitle'>{data.toptext}</p>
                <Link to='/about'><div className='about'><p className='abouttext'>Zobacz więcej</p></div></Link>
                </div>
              </div>
            ) ): null}
            </Slider>
            
            
        </div>
    );
}

