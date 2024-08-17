import React, { useState, useEffect } from 'react';
import './Banner.css'

const Banner = () => {
  const images = [
    './images/banner1.jpg', 
    './images/banner2.jpg',
    './images/banner3.jpg'
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      <img src={images[currentImage]} alt="Travel Banner" />
    </div>
  );
};

export default Banner;
