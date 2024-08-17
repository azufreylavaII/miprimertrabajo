import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Menu from './components/Menu/Menu';
import Banner from './components/Banner/Banner';
import TouristPlaces from './components/TouristPlaces/TouristPlaces';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <Banner />
      <TouristPlaces />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
