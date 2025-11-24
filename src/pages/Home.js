import React from 'react';
import Hero from '../components/Hero';
import Contact from './Contact';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';
import  Banner from '../components/Banner';
function Home() {
  return (
    <div className="p-10 text-center">
      <Hero/>
      <Banner/>
      <WhyChooseUs/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}

export default Home;
