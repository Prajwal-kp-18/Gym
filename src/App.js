import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import IntroCard from './container/IntroCard/IntroCard';
import GymTrainers from './container/GymTrainers/GymTrainers';
import Classes from './container/Classes/Classes';
import './App.css';
import Gallery from './container/Gallery/Gallery';
// import BMI from './container/BMI/BMI';
import Pricing from './container/Pricing/Pricing';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <IntroCard />
      <GymTrainers />
      <Classes />
      <Gallery />
      {/* <BMI /> */}
      <Pricing />
    </div>
  );
};

export default App;
