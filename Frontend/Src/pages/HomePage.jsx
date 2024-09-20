import React from 'react';
import SliderSection from '../components/SliderSection';
import FeaturedProducts from '../components/FeaturedProducts';
import FeaturedServices from '../components/FeaturedServices';

const HomePage = () => {
  return (
    <div>
      <SliderSection />
      <FeaturedProducts />
      <FeaturedServices />
    </div>
  );
};

export default HomePage;
