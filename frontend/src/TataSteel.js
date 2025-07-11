// src/TataSteel.js
import React from 'react';
import { Link } from 'react-router-dom';
import './TataSteel.css';

function TataSteel() {
  return (
    <div className="tata-container">
      <h1>Welcome to Tata Steel</h1>
      <p>
        Tata Steel is one of the world's largest steel producers and a leader in sustainable steelmaking.
      </p>

      <div className="image-gallery">
        <img src="/images/factory-modern.jpg" alt="Modern Steel Factory" />
        <img src="/images/steel-production.jpg" alt="Steel Manufacturing Process" />
      </div>

      {/* Ratan Tata section */}
      <div className="leadership-section">
        <h2>Legacy of Leadership</h2>
        <div className="ratan-tata">
          <img src="/images/ratan-tata.jpg" alt="Ratan Tata" />
          <div className="ratan-text">
            <h3>Ratan Tata</h3>
            <p>
              Ratan Tata is a visionary industrialist and philanthropist who led the Tata Group to global recognition.
              His legacy inspires integrity, innovation, and excellence in every Tata brand. Under his leadership, Tata
              Steel expanded its global footprint and continued its commitment to sustainability and nation building.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-choose">
        <h2>Why Choose Tata Steel?</h2>
        <div className="features">
          <div className="feature">
            <h3>Legacy of Trust</h3>
            <p>Over 100 years of delivering quality steel with a commitment to excellence.</p>
          </div>
          <div className="feature">
            <h3>Advanced Tech</h3>
            <p>World-class steel plants with cutting-edge automation and sustainability.</p>
          </div>
          <div className="feature">
            <h3>Wide Range</h3>
            <p>From automotive to agriculture, our steel serves every key sector.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="cta">
        <h2>Explore Our Products</h2>
        <p>See how Tata Steel powers India’s industries with high-quality solutions.</p>
        <Link to="/segments">
          <button className="cta-button">View Products</button>
        </Link>
      </div>
    </div>
  );
}

export default TataSteel;
