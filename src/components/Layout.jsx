import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import DemoWarning from './DemoWarning';
import './Layout.css';

const Layout = () => {
  const [showWarning, setShowWarning] = useState(true);

  return (
    <div className="app-container">
      {showWarning && <DemoWarning onClose={() => setShowWarning(false)} />}
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="app-footer">
        <div className="footer-top">
          <div className="footer-left">
            <p className="footer-desc">At Opulenza, we believe luxury is more than a home—it’s a lifestyle. From exclusive apartments in Colombo to wellness villas, premium residencies, and prime land plots, our developments combine elegance, comfort, and lasting value. As one of Sri Lanka’s trusted real estate brands, we craft spaces that enhance lives and secure your investment for the future.</p>
            <p className="footer-contact"><strong>Phone:</strong> +94 77 123 4567</p>
            <p className="footer-contact"><strong>Address:</strong> No:123 Lotus Grove Lane, Colombo 07, Sri Lanka</p>
          </div>
          <div className="footer-right">
            {/* reserved for brand or small elements */}
          </div>
        </div>

        <div className="footer-bottom centered">
          <p className="footer-copy">© {new Date().getFullYear()} OPULENZA. All rights reserved.</p>
        </div>

        <p className="footer-credit">Created by Steffani Silva.</p>
      </footer>
    </div>
  );
};

export default Layout;
