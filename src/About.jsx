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
    aboutOwners {
      photo {
        url
      }
      name
    }
    aboutCompanies {
      ourProducts
      ourMission
      aboutUs
      whyUs
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
            <hr className='abouthr'></hr>
            <h1 className='knowmore'>Poznaj nas!</h1>
            <div className='owners'>
                <div className='owner'>
                    <img className='ownerimage'  src={data.aboutOwners[0].photo.url}></img>
                    <p className='ownername'>{data.aboutOwners[0].name}</p>
                </div>
                <div className='owner'>
                    <img className='ownerimage' src={data.aboutOwners[1].photo.url}></img>
                    <p className='ownername'>{data.aboutOwners[1].name}</p>
                </div>
            </div>
            <div className='arguments'>
                <div className='argument'>
                    <h1 className='argumentitle'>O nas</h1>
                    <p className='argumenttext'>{data.aboutCompanies[0].aboutUs}</p>
                </div>
                <div className='argument'>
                    <h1 className='argumentitle'>Nasza misja</h1>
                    <p className='argumenttext'>{data.aboutCompanies[0].ourMission}</p>
                </div>
                <div className='argument'>
                    <h1 className='argumentitle'>Nasze produkty</h1>
                    <p className='argumenttext'>{data.aboutCompanies[0].ourProducts}</p>
                </div>
                <div className='argument'>
                    <h1 className='argumentitle'>Dlaczego my?</h1>
                    <p className='argumenttext'>{data.aboutCompanies[0].whyUs}</p>
                </div>
                <div className='testaboutdiv'><a className='aboutreadmorea' href="/contact"><div href="/contact" className='aboutreadmore'><p>Wyślij zapytanie!</p></div></a></div>

            </div>
        </div>
    );
}

export default About;