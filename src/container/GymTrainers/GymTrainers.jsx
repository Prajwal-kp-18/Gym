import React from 'react'
import images from '../../constants/images'

import './GymTrainers.css'

const GymTrainers = () => {
  return (
    <div className='app__trainers' id='trainers'>
         <div className='app__gallery-content'>
            <div className='app__gallery-title'>
            <h3>GYM TRAINERS</h3>
            </div>
            <h2>Team Of Expert Coaches</h2>
           <div app__gallery-title_2><h4>Expert team of coaches helps you succeed in any goal,
personalized guidance and motivation provided!</h4></div> 
    </div>

       <div className='app__pricing-cards'>
      <div className='app__trainers-main'> 
      <div className='app__trainers-img'>
            <div className='app__img'><img src={images.trainer1} alt='trainer' /></div>
        </div>
        <div className='app__trainers-details'>
                <p>Jhon Lewis</p>
                <h5>Yoga Trainer</h5>
                <div className='app__icons'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-solid fa-envelope"></i>
                </div>
        </div>
        </div>
      <div className='app__trainers-main'> <div className='app__trainers-img'>
            <div className='app__img'><img src={images.trainer2} alt='trainer' /></div>
        </div>
        <div className='app__trainers-details'>
                <p>Jonathan Doe</p>
                <h5>Crossfit Trainer</h5>
                <div className='app__icons'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-solid fa-envelope"></i>
                </div>
        </div>
        </div>
      <div className='app__trainers-main'> <div className='app__trainers-img'>
            <div className='app__img'><img src={images.trainer3} alt='trainer' /></div>
        </div>
        <div className='app__trainers-details'>
                <p>Ana June</p>
                <h5>Personal Trainer</h5>
                <div className='app__icons'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-solid fa-envelope"></i>
                </div>
        </div>
        </div>



        </div>
        
    </div>
  )
}

export default GymTrainers