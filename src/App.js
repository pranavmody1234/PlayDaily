import React from 'react';
import './App.css';
import Header from './Header';
import GamesSection from './GamesSection';
import Footer from './Footer';
import MobileMenu from './MobileMenu'; // Import the MobileMenu component
import DateCarousel from './DateCarousel';
import CurrentTheme from './CurrentTheme';
import Timer from './timer';


function App() {
  return (
    <div className="app-container">
      <Header />
      <MobileMenu />
      <CurrentTheme />
      <DateCarousel />
      <GamesSection />
      <Timer />
      <Footer />
    </div>
  );
}

export default App;