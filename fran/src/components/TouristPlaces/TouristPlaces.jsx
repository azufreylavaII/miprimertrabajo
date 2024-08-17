import React from 'react';
import './TouristPlaces.css';

const TouristPlace = ({ title, imageSrc, width, height }) => {
  return (
    <div className="place">
      <img src={imageSrc} alt={title} style={{ width: width, height: height }} /> 
      <p>{title}</p>
    </div>
  );
};

const TouristPlaces = () => {
  return (
    <div className="tourist-places">
      <div className="left-column">
        <TouristPlace title="Cusco - Machupicchu" imageSrc="./images/cusco.jpg" width="300px" height="400px" />
      </div>
      <div className="right-column">
        <TouristPlace title="Arequipa - Yanahuara" imageSrc="./images/arequipa.jpg" />
        <TouristPlace title="Piura - Catacaos" imageSrc="./images/piura.jpg" />
      </div>
    </div>
  );
};

export default TouristPlaces;