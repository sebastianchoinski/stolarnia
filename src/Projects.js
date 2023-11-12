import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Slider from "react-slick";
import './Projects.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
          slidesToScroll: 1
        };       
    return (
        <div>

            {data? data.projects.map((data) => (
            <div>
                <p>{data.title}</p>
                <p>{data.description}</p>
                <div>
        <div>
        <Slider className='slider-div' {...settings}>
        {data.images? data.images.map((image) => (
            <div>
                <img className="carousel-img" src={image.url}></img>
            </div>
            )): null}
          
        </Slider>
        </div>
      </div>
            </div>
            )): null }
        </div>
    );
}