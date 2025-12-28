import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>EXCLUSIVE<span> APARTMENTS</span></h1>
          <p>Indulge in luxury apartments living with private amenities, scenic views, and sophisticated design elements.</p>
          <div className="hero-buttons">
            <Link to="/search" className="primary-btn">Discover Properties</Link>
            <Link to="/contact" className="secondary-btn">Contact Us</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/main.jpg" alt="Modern Home" />
        </div>
      </section>
      <div className="section-content">
              <h2>WHO ARE WE?</h2>
        <p>At Opulenza, we believe the finest investment is in your lifestyle. Our premium developments, from luxurious apartments in Colombo to wellness-focused villas, refined residencies, and exclusive land plots, combine health, comfort, and financial security. As a trusted real estate brand, we create exceptional spaces that elevate living and protect your investments.</p>
        </div>

        

<div className="section-content">
  <h2>Our Gallery</h2>
  <p>Explore our collection of stunning properties and luxurious living spaces.</p>

  <div className="image-gallery">
    <img src="1.jpg" alt="Modern Home" />
    <img src="2.jpg" alt="Modern Home" />
    <img src="3.jpg" alt="Modern Home" />
    <img src="4.jpg" alt="Modern Home" />
    <img src="5.jpg" alt="Modern Home" />
    <img src="6.jpg" alt="Modern Home" />
    <img src="7.jpg" alt="Modern Home" />
    <img src="8.jpg" alt="Modern Home" />
    <img src="9.jpg" alt="Modern Home" />
    <img src="10.jpg" alt="Modern Home" />
    <img src="11.jpg" alt="Modern Home" />
    <img src="12.jpg" alt="Modern Home" />
  </div>
</div>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🏡</div>
            <h3>Wide Selection</h3>
            <p>Choose from hundreds of properties across the country.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>We negotiate the best deals for our clients.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👨‍💼</div>
            <h3>Expert Agents</h3>
            <p>Our team has over 20 years of combined experience.</p>
          </div>
        </div>
      </section>
    </div>

    
  );
};

export default HomePage;