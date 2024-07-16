import React, { useState, useEffect, useRef } from 'react';
import './App.css'; // Ensure your CSS covers all the aspects needed for both header and menu
import logo from './logo.svg'; // Adjust the path to your logo image

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(); // Create a ref for the menu

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggles the open state
    };

    useEffect(() => {
        const menuButton = document.querySelector('.menu-button');
    
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                event.target !== menuButton
            ) {
                setIsOpen(false);
            }
        };
    
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="header">
            <div className="left-container">
                <img className="profileicon" alt="profileicon" src={'./images/profile_icon.png'} />
            </div>
            <div className="right-container">
                <a href="/" className='HomeAnchor'><p className="company-name">playdaily.gg</p></a>
                <button className="menu-button" onClick={toggleMenu}>
                    &#9776; {/* Unicode for hamburger icon */}
                </button>
                <div className={`menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
                    <ul>
                        <li><a href="#news">Login/Signup</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="./game">Game</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
