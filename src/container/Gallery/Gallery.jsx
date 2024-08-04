import React from 'react'

import images from '../../constants/images';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className='app__gallery' id="gallery">
        <div className='app__gallery-content'>
            <div className='app__gallery-title'>
            <h3>GYMATE GALLERY</h3>
            </div>
            <h2>Our Workplace Gallery</h2>
           <div app__gallery-title_2><h4>Our Workplace Gallery features modern office, team collaboration, and fun culture.
Attracts talents and showcases company's work atmosphere.</h4></div> 
        </div>
        <div className='app__gallery-main'><div className='app__gallery-image'>
            <div><img src={images.gallery1} alt='gallery'  /></div>
            <div><img src={images.gallery2} alt='gallery' /></div>
            <div><img src={images.gallery3} alt='gallery' /></div>
            <div><img src={images.gallery4} alt='gallery' /></div>
            <div><img src={images.gallery5} alt='gallery' /></div>
            <div><img src={images.gallery6} alt='gallery' /></div>
            <div><img src={images.gallery7} alt='gallery' /></div>
            <div><img src={images.gallery8} alt='gallery' /></div>

        </div>
       
    </div>
    </div>
  )
}

export default Gallery