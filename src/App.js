import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Product from './components/Product';
import location from './components/location';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Product />
      <location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
