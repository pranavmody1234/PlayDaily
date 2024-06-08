import React from 'react';
import logo from './logo.svg'; // Adjust the path to your logo image

function Header() {
    return (
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="Logo" className="logo" />
          <p className="company-name"><b>PlayDaily.gg</b></p>
        </div>
      </header>
    );
}

export default Header;
