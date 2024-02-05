import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './Projects.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet-async';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  zindex: '99' ,width: '40px', height: '40px', padding:'8px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zindex: '99', width: '40px', height: '40px', padding:'30px' }}
      onClick={onClick}
    />
  );
}

const GET_PROJECTS = gql`
query MyQuery {
    projects {
      title
      description
      images {
        url
      }
    }
  }
  
  `

export default function Projects(props) {
    const {loading, error, data} = useQuery(GET_PROJECTS)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log(data)

        const settings = {
          dots: true,
          fade: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          
        };       
        return (
          
          <div>
            <Helmet>
        <title>Projekty | Manufaktura Stolar</title>
        <meta name="description" content="Strona Manufaktury Stolar. Wejdź i dowiedz się więcej!"></meta> 
          </Helmet>
      <h1 className='mainprojectheader'>PROJEKTY</h1>
        <hr className='mainprojectshr'></hr>
        <div className='mainprojectsdiv'>
          <div className='projectsdiv'>
            
            {data? data.projects.map((data) => (
              <div className='projectdiv'>
              <div className='projecttitledesc'>
                <h1 className='projecttitle'>{data.title}</h1>
                <p className='projectdesc'>{data.description}</p>
                </div>
                
        
        <Slider style={{maxwidth: "100%"}} className='projectssliderdiv' {...settings}>
          
        {data.images? data.images.map((image) => (
          
          <img  className="carouselimg" src={image.url}></img>
          
          )): null}
          
        </Slider>
        
      </div>
            
            )): null }
            
            </div>
            
        </div>
        </div>
    );
}