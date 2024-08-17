import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>TRAVELING</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
