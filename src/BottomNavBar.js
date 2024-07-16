import React from 'react';


function NavBar() {
  return (
    <nav className="nav-bar">
     <a href="/"> <div className="nav-item">
        <img src={'./images/homeicon.png'} alt="Home" className="icon"/>
        Home
      </div></a>
      <a href="/"> <div className="nav-item">
      <img src={'./images/leaderboardicon.webp'} alt="Home" className="icon"/>
        Scores
      </div></a>
      <a href="/"><div className="nav-item">
      <img src={'./images/pointscollected.png'} alt="Home" className="icon"/>
        Collection
      </div></a>
      <a href="/"><div className="nav-item">
      <img src={'./images/clubicon.png'} alt="Home" className="icon"/>
        Club
      </div></a>
    </nav>
  );
}

export default NavBar;