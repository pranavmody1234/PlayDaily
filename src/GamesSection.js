import React from 'react';
import GameTile from './GameTile';

function GamesSection() {
    return (
      <div className="games-section">
      <div className="header-container">
          <h1>Today's Games</h1>
          <div className="coins-container">
              <img src="./images/coin.webp" alt="Coin" className="coin-icon"/>
              <span className="coin-value">40</span>
              <img src="./images/coin.webp" alt="Coin" className="coin-icon"/>
              <span className="coin-value">40</span>
          </div>
      </div>
      <GameTile />
  </div>
  
    );
  }

  export default GamesSection;
