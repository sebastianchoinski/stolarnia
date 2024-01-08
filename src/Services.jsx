import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './Services.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GET_SERVICES = gql`
query MyQuery {
    mainPageServices {
      title
      description
      photo {
        url
      }
    }
  }
  
`

function Services(props) {
    
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        adaptiveHeight: false,
        adaptiveWidth: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 0.5,
              slidesToScroll:1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      
      };
    const {loading, error, data} = useQuery(GET_SERVICES)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div>
            <div >
            <div  className='servicesliderdiv'>
            <p className='servicessectionheader'>Kompleksowe usługi
stolarskie i nie tylko!</p>
            <Slider className='serviceslider' {...settings}>
            {data? data.mainPageServices.map((data) => (
                <div className='servicediv'>
                    <img className='serviceimg' src={data.photo.url}></img>
                    <h1 className='serviceheader'>{data.title}</h1>
                    <p className='servicedesc'>{data.description}</p>
                </div>
            )): null}
            </Slider>
            </div>
            </div>
        </div>
    );
}

export default Services;