// app/page.tsx
import React from 'react';
import Benefits from './components/Benefits';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Services from './components/Services';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Packages />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;