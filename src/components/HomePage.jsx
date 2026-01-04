import React from 'react';
import { Link } from 'react-router-dom';
import { Home, TrendingUp, Users } from "lucide-react";
import './HomePage.css';
import SocialAside from './SocialAside';


const HomePage = () => {
  return (
    <div className="home-container">
      <SocialAside />
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
        <h1>WHO ARE WE?</h1>
        <p>At Opulenza, we believe the finest investment is in your lifestyle. Our premium developments, from luxurious apartments in Colombo to wellness-focused villas, refined residencies, and exclusive land plots, combine health, comfort, and financial security. As a trusted real estate brand, we create exceptional spaces that elevate living and protect your investments.</p>
        </div>

        

<div className="section-content">
  <h1>OUR GALLERY</h1>
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
        <div className="features-container modern-features">

          <article className="feature-card">
            <div className="feature-icon">
              <Home size={28} />
            </div>
            <h3>Wide Selection</h3>
            <p>Choose from hundreds of properties across the country.</p>
            <div className="feature-meta">
              <span className="stat">1,200+ Listings</span>
              <Link to="/search" aria-label="Explore listings" className="feature-cta">Explore</Link>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-icon">
              <TrendingUp size={28} />
            </div>
            <h3>Best Prices</h3>
            <p>We negotiate the best deals and provide price transparency.</p>
            <div className="feature-meta">
              <span className="stat">Price Match Guarantee</span>
              <Link to="/search?deals=1" aria-label="View deals" className="feature-cta">View Deals</Link>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-icon">
              <Users size={28} />
            </div>
            <h3>Expert Agents</h3>
            <p>Our team has over 20 years of combined experience.</p>
            <div className="feature-meta">
              <span className="stat">20+ Local Agents</span>
              <Link to="/contact" aria-label="Contact agents" className="feature-cta">Contact</Link>
            </div>
          </article>

        </div>
      </section>
    </div>

    
  );
};

export default HomePage;
