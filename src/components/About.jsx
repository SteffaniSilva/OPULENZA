import React from 'react';
import './About.css';

const About = () => {
  return (
    <main className="about-page">
      <div className="container">

        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <h1>WHAT IS OPULENZA</h1>
              <p>
                Opulenza is one of Sri Lanka's premier real estate brands, dedicated to creating luxurious and semi-luxurious living spaces. With years of expertise, we design residential projects that combine elegance, innovation, and trust, while offering seamless property and land sales services. Built on integrity, Opulenza delivers lasting value for homeowners and investors alike.
              </p>
            </div>
            <div className="about-image">
              <img src="/13.jpg" alt="Opulenza property" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-row reverse">
            <div className="about-text">
              <h1>OUR MISSION</h1>
              <p>
                To be Sri Lanka's most trusted real estate brand, delivering luxury and semi-luxury living with excellent service and operational excellence. We strive to enhance quality of life, uphold ethical values, and create lasting value for all through innovation, integrity, and customer care.
              </p>
            </div>
            <div className="about-image">
              <img src="/16.jpg" alt="Opulenza mission" />
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-row">
            <div className="about-text">
              <h1>OUR GOAL</h1>
              <p>
                Our goal then and now is to provide quality projects. By rethinking and rebuilding processes for the digital age, we combine the speed and insight of design thinking with the scale and accuracy of data analytics. We aim to provide permanent solutions for the housing needs of enterprising people who seek our services. Opulenza facilitates modern lifestyles in unique environments with comprehensive facilities, offering luxury and semi-luxury condominium units at reasonable prices.
              </p>
            </div>
            <div className="about-image">
              <img src="/15.jpg" alt="Opulenza goal" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
