import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function MobileMenu() {
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
        <div>
            <button className="menu-button" onClick={toggleMenu}>
                &#9776; {/* Unicode for hamburger icon */}
            </button>
            <div className={`menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
                <ul>
                    <li><a href="#news">Login/Signup</a></li>
                    <li><a href="#contact">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#about">News</a></li>
                    <li><a href="#about">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;