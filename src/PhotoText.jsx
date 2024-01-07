import React from 'react';
import './PhotoText.scss'

export default  function PhotoText(props) {
    let info = props.data
   
    
    return (
    
        <div class='maindiv'>
            
            {props.data?  props.data.posts.map((data) => (
            <div>
            <div className="mainelement">
            <div className='textcontainer'>
            <h1 className='header'>{data.heading}</h1>
            <p className='text'>{data.description}</p>
            </div>
            <img className="photo" src={data.picture.url}></img>
            </div>
            <hr className='phototexthr'></hr>
            </div>
            
            )): null }
        </div> 
    );
}

