import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './About.scss'

const GET_POSTS = gql`
query MyQuery {
    abouts {
      topTitle
      topAsset {
        url
      }
      topText
    }
  }
`;  

function About(props) {
    const {loading, error, data} = useQuery(GET_POSTS)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log( loading, error)
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <div className='topdiv'>
                <div className='toptextdiv'>
                    <h1 className='topheader'>{data.abouts[0].topTitle}</h1>
                    <p className='toptext'>{data.abouts[0].topText}</p>
                </div>
                <div className='topimagediv'>
                    <img className='topimage' src={data.abouts[0].topAsset.url}>
                    </img>
                </div>
            </div>
            <hr className='abouthr'></hr>
            <h1 className='markheader'></h1>
            <h1 className='yearheader'>{currentYear}</h1>
        </div>
    );
}

export default About;