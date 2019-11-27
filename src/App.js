import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Slider from './components/Slider';
import Product from './components/Product';
import Soc from './components/Soc';

// import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <Product />
      <Soc />
      {/* <LocationMap /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
