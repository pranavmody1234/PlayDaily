import React from 'react';
import './App.css';
import Header from './Header';
import GamesSection from './GamesSection';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import DateCarousel from './DateCarousel';
import CurrentTheme from './CurrentTheme';
import GameTiles from './GameTile';
import Timer from './timer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './TriviaGame/Game';
import BottomNavBar from './BottomNavBar';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path='/' element={
            <>
            <CurrentTheme />
              <DateCarousel />
              <GamesSection />
              <GameTiles />
              <Timer />

            </>
          } />
          <Route path='/game' element={<Game />} />
        </Routes>
        <Footer />
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
