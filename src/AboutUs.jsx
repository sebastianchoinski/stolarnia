import React from 'react';
import './AboutUs.scss';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
query MyQuery {
    mainPageAboutUses {
      title
      text
      photo {
        url
      }
    }
  }
  
  
`;

function AboutUs(props) {
    const {loading, error, data} = useQuery(GET_POSTS)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    console.log("NEW", data, loading, error)
    return (
        <div>
            <div className='mainaboutusdiv'>
            <div className='mainaboutcontent'>
                <div className='abouttextdiv'>
                <h1 className='abouttitle'>{data.mainPageAboutUses[0].title}</h1>
                <p className='aboutustext'>{data.mainPageAboutUses[0].text}</p>
                <a href='/contact'><div className='meeting'><p className='meetingtext'>Umów spotkanie</p></div>
                </a>
                </div>
                <div>
                <img className='aboutimg' src={data.mainPageAboutUses[0].photo.url}></img>
                </div>
            </div>
            </div>
        </div>
    );
}

export default AboutUs;