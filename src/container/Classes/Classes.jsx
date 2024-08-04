import React from 'react'
import images from '../../constants/images'

import './Classes.css';
const Classes = () => {
  return (
    <div className='app__classes-main' id='classes'>
    <div className='app__gallery-content'>
            <div className='app__gallery-title'>
            <h3>GYM CLASSES</h3>
            </div>
            
    </div>
    <div className='app__classes-time'>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.cycling} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Cycling</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>Dorian Yate  </h3>
                <h4>⏰Wed: 9:00am</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
            
        </div>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.meditation} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Meditation</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>Maria Mich  </h3>
                <h4>⏰Fri: 1:00pm</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
            
        </div>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.box} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Boxing</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>John Flex  </h3>
                <h4>⏰Tue: 4:00pm</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
            
        </div>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.karate} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Karate</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>David Rich  </h3>
                <h4>⏰Sat: 9:00am</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
            
        </div>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.powerlifting} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Power Lifting</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>Larry Wheels  </h3>
                <h4>⏰Mon: 8:00pm</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
            
        </div>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.workout} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Workout</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>Shawn Ray  </h3>
                <h4>⏰Sun: 10:00am</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
            
        </div>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.cross} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Crossfit</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>Jenifer Alex  </h3>
                <h4>⏰Wed: 9:00pm</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
            
        </div>
        <div className='app__classes-card'>
           <div className='app__classes-img'><img src={images.running} alt='cycling' /></div>
           <div className='app__classes-content'>
            <h2>Running</h2>
            <div className='details'>
                <div className='app__name'>
                <h3>Zinia Zessy  </h3>
                <h4>⏰Fri: 6:00am</h4>
                </div>
            </div>
            <button className='app__button'><span>JOIN NOW</span></button>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Classes