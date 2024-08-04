import React from 'react';
import images from '../../constants/images';

import './Pricing.css';
const Pricing = () => {
  return (
    <div className="app__pricing-main" id="price">
      <div className="app__pricing-content">
        <div className="app__gallery-title">
          <h3>PRICING CHART</h3>
        </div>
        <h2>Exclucive Pricing Plan</h2>
        <div app__pricing-title_2>
          <h4>
            Our Workplace Gallery features modern office, team collaboration,
            and fun culture. Attracts talents and showcases company's work
            atmosphere.
          </h4>
        </div>
      </div>

      <div className="app__pricing-cards">
        <div className="app__pricing-card">
          <img src={images.price1} alt="pricing" />
          <p>Beginners</p>
          <h3>
            ₹850<small> /month</small>
          </h3>
          <h5>Free hand</h5>
          <h5>Gym Fitness</h5>
          <h5>Weight Loss</h5>
          <h5>Personal Trainer</h5>
          <h5>Cycling</h5>
          <div className="app__pricing-button">
            <button>
              <span>Start now</span>
            </button>
          </div>
        </div>
        <div className="app__pricing-card">
          <img src={images.price2} alt="pricing" />
          <p>Intermediate</p>
          <h3>
            ₹1400<small> /month</small>
          </h3>
          <h5>Free hand</h5>
          <h5>Gym Fitness</h5>
          <h5>Weight Loss</h5>
          <h5>Personal Trainer</h5>
          <h5>Cycling</h5>
          <div className="app__pricing-button">
            <button>
              <span>Start now</span>
            </button>
          </div>
        </div>
        <div className="app__pricing-card">
          <img src={images.price3} alt="pricing" />
          <p>Advanced</p>
          <h3>
            ₹2200<small> /month</small>
          </h3>
          <h5>Free hand</h5>
          <h5>Gym Fitness</h5>
          <h5>Weight Loss</h5>
          <h5>Personal Trainer</h5>
          <h5>Cycling</h5>
          <div className="app__pricing-button">
            <button>
              <span>Start now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
