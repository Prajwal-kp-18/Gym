import React from 'react';
import images from '../../constants/images';
import { SubHeading } from '../../components';
import { FaHeart } from 'react-icons/fa';

import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__bg flex__center " id="home">
      <div className="header">
        <img className="header__bg" src={images.hero} alt="G_overlay" />
      </div>
      <div className="app__header-content_about-small">
        <SubHeading title="FIND YOUR ENERGY" />
        <p className="bolder">
          MAKE YOUR BODY
          <br />
        </p>
        <p className="">FIT & PERFECT</p>
        <button>
          <span>OUR CLASSES </span>
        </button>
      </div>

      <div className="app__header-content_about-large content">
        <SubHeading title="FIND YOUR ENERGY" />
        <p className="bolder">
          MAKE YOUR BODY
          <br />
        </p>
        <p className="">FIT & PERFECT</p>
        <button>
          <span>OUR CLASSES </span>
        </button>{' '}
      </div>
      <section></section>
    </div>
  );
};

export default Header;
