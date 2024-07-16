import React, { useState, useRef, useEffect } from 'react';
import './App.css';  // Ensure your styles are imported

const DateCarousel = () => {
  const dates = [
    { day: 'M', icon: '👾', progress: 60 },
    { day: 'T', icon: '🔥', progress: 75 },
    { day: 'W', icon: '👟', progress: 20 },
    { day: 'T', icon: '🚗', progress: 98 },
    { day: 'F', icon: '🍔', progress: 45 },
    { day: 'S', icon: '🎉', progress: 10 },
    { day: 'S', icon: '🗳️', progress: 100 }
  ];

  const [currentIndex, setCurrentIndex] = useState(dates.length - 1);
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const carouselRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex === 0 ? dates.length - 1 : prevIndex - 1;
      setShowLeftArrow(newIndex !== 0);
      setShowRightArrow(newIndex !== dates.length - 1);
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex === dates.length - 1 ? 0 : prevIndex + 1;
      setShowLeftArrow(newIndex !== 0);
      setShowRightArrow(newIndex !== dates.length - 1);
      return newIndex;
    });
  };

  useEffect(() => {
    const activeItem = carouselRef.current?.children[currentIndex];
    if (activeItem) {
      const scrollLeft = activeItem.offsetLeft - (carouselRef.current.offsetWidth / 2 - activeItem.offsetWidth / 2);
      carouselRef.current.scroll({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    // Scroll to the rightmost item on initial load
    const activeItem = carouselRef.current?.children[dates.length - 1];
    if (activeItem) {
      const scrollLeft = activeItem.offsetLeft - (carouselRef.current.offsetWidth / 2 - activeItem.offsetWidth / 2);
      carouselRef.current.scrollLeft = scrollLeft;
    }
  }, []);

  return (
    <div className="date-carousel-container">
      {showLeftArrow && <button onClick={goToPrevious} className="carousel-nav carousel-prev">&#10094;</button>}
      <div className="date-carousel" ref={carouselRef}>
        {dates.map((date, index) => (
          <div key={index} className={`date-item ${index === currentIndex ? 'active' : ''}`}>
            <div className="date-icon-container">
              <svg className="progress-ring" width="60" height="60">
                <circle
                  className="progress-ring__circle"
                  stroke="green"
                  strokeWidth="4"
                  fill="transparent"
                  r="26"
                  cx="30"
                  cy="30"
                  style={{ strokeDasharray: `${2 * Math.PI * 26}`, strokeDashoffset: `${(1 - date.progress / 100) * 2 * Math.PI * 26}` }}
                />
              </svg>
              <span className="date-icon">{date.icon}</span>
            </div>
            <span className="date-text">{date.day}</span>
          </div>
        ))}
      </div>
      {showRightArrow && <button onClick={goToNext} className="carousel-nav carousel-next">&#10095;</button>}
    </div>
  );
};

export default DateCarousel;
