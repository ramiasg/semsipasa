import React from 'react';
import './App.css';

import NavBar from './components/Navbar';
import Slider from './components/Slider';
import Product from './components/Product';
import Soc from './components/Soc';

// import LocationMap from './components/LocationMap';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
        <div className="header-container">
            <div className="whatsapp">
                <img src={require('././assets/whatsapp.jpg')} className='whatsapp-icon' alt=""/>
                <span>+90554539834</span>
            </div>
            <div className="logo-container mx-auto d-block">
                {/*<img src={require('../assets/logo.png')} alt="" className='logo'/>*/}
                <h1 className='header'>Semsi Pasa</h1>
            </div>
            <div className="gmail">
                <img src={require('././assets/gmail.png')} className='gmail-icon' alt=""/>
                <span>semsipasa@gmail.com</span>
            </div>
        </div>
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
