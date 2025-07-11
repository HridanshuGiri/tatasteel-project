// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="#!">Disclaimer</a> | 
        <a href="#!">Privacy Policy</a> | 
        <a href="#!">Cookie Policy</a> | 
        <a href="#!">Sitemap</a>
        <p>© Copyright Tata Steel 2025. All rights reserved.</p>
        <p className="made-by">Project by Hridanshu Giri</p>

      </div>
      
      <div className="footer-right">
        <span>FOLLOW US ON</span>
        <a href="https://www.facebook.com/TataSteelLtd/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/facebook.png" alt="Facebook" />
        </a>
        <a href="https://x.com/Tatasteelltd" target="_blank" rel="noopener noreferrer">
          <img src="/icons/x.png" alt="X" />
        </a>
        <a href="https://www.linkedin.com/company/tatasteelltd" target="_blank" rel="noopener noreferrer">
          <img src="/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/user/Thetatasteel" target="_blank" rel="noopener noreferrer">
          <img src="/icons/youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.instagram.com/tatasteelltd/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/instagram.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
