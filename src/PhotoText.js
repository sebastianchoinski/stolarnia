import React from 'react';
import './PhotoText.scss'
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

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


export default function PhotoText(props) {
    const {loading, error, data} = useQuery(GET_POSTS)
if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;
    return (
    
        <div class='main-div'>
            {data? data.posts.map((data) => (
            <div>
            <div className="main-element">
            <div className='text-container'>
            <h1 className='header'>{data.heading}</h1>
            <p className='text'>{data.description}</p>
            </div>
            <img className="photo" src={data.picture.url}></img>
            </div>
            </div>
            )): null }
        </div>
    );
}

