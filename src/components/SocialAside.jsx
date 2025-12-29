import React from 'react';
import './SocialAside.css';

const SocialAside = () => {
  return (
    <aside className="social-aside" aria-label="Social links">
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.61 3.5-3.61 1.02 0 2.09.18 2.09.18v2.3h-1.17c-1.15 0-1.51.72-1.51 1.47v1.76h2.57l-.41 2.9h-2.16v7.03C18.34 21.2 22 17.06 22 12.07z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.2A4.8 4.8 0 1 0 16.8 13 4.8 4.8 0 0 0 12 8.2zM18.4 6.2a1.12 1.12 0 1 1 1.12-1.12A1.12 1.12 0 0 1 18.4 6.2z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M22 5.92c-.63.28-1.3.47-2 .55a3.48 3.48 0 0 0 1.53-1.92 6.92 6.92 0 0 1-2.2.84 3.46 3.46 0 0 0-5.9 3.15 9.82 9.82 0 0 1-7.13-3.62s-3 5 3 8.1a3.51 3.51 0 0 1-1.56-.43v.04a3.5 3.5 0 0 0 2.78 3.42 3.5 3.5 0 0 1-.93.12c-.23 0-.46-.02-.69-.06a3.49 3.49 0 0 0 3.24 2.42A7 7 0 0 1 2 19.54 9.84 9.84 0 0 0 8.45 21c6.06 0 9.39-5.02 9.39-9.38v-.43A6.7 6.7 0 0 0 22 5.92z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.37 0 .08 5.29.08 11.92a11.7 11.7 0 0 0 1.62 6L0 24l6.32-1.65A11.9 11.9 0 0 0 12 23.92c6.63 0 11.92-5.29 11.92-11.92 0-3.18-1.24-6.17-3.4-8.52zM12 21.28a9.12 9.12 0 0 1-4.63-1.2l-.33-.2-3.76 1 1-3.66-.21-.38A9.12 9.12 0 1 1 21.12 12 9.06 9.06 0 0 1 12 21.28zM17.13 14.2c-.29-.15-1.71-.84-1.98-.93s-.45-.15-.64.15-.73.93-.9 1.12-.33.23-.62.08a7.8 7.8 0 0 1-2.29-1.41c-.85-.85-1.41-1.9-1.58-2.18s0-.44.15-.62.41-.44.62-.66.21-.4.31-.66.08-.5 0-.66c-.09-.16-.64-1.55-.87-2.12-.23-.56-.46-.49-.64-.5s-.44-.01-.67-.01a1.77 1.77 0 0 0-1.28.6c-.43.5-1.34 1.31-1.34 3.2s1.37 3.72 1.56 3.98 2.69 4.12 6.53 5.78c.91.39 1.62.62 2.17.8.91.29 1.74.25 2.39.15.73-.12 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.12-.29-.19-.64-.34z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M12.04 0C5.4 0 .08 5.33.08 11.9c0 4.65 2.93 8.64 7.2 10.2-.1-.86-.2-2.18.03-3.12.22-.93 1.42-5.93 1.42-5.93s-.36-.72-.36-1.78c0-1.68.98-2.93 2.2-2.93 1.03 0 1.52.77 1.52 1.7 0 1.03-.66 2.57-1 4-.28 1.2.6 2.18 1.79 2.18 2.14 0 3.78-2.3 3.78-5.62 0-2.93-2-5-5.1-5-3.49 0-5.56 2.62-5.56 5.33 0 1.07.41 2.22.92 2.84.1.12.12.23.09.35-.1.4-.33 1.39-.37 1.57-.05.22-.17.27-.39.16-1.44-.67-2.33-2.77-2.33-4.47 0-3.63 2.64-6.95 7.62-6.95 4.01 0 6.72 2.86 6.72 6.69 0 4.01-2.27 6.87-5.67 6.87-1.1 0-2.12-.57-2.48-1.24 0 0-.61 2.45-.76 3.07-.28 1.18-.83 2.36-1.38 3.23.99.3 2.04.46 3.14.46 6.64 0 12.04-5.4 12.04-12S18.69 0 12.04 0z" />
            </svg>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SocialAside;
