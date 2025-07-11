import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowConfirm(true);
  };

  const confirmLogout = () => {
    setShowConfirm(false);
    navigate('/'); // Redirect to LoginSignup.js
  };

  const cancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">Tata Steel</div>
        <ul>
          <li><NavLink to="/tatasteel" end>Home</NavLink></li>
          <li><NavLink to="/segments">Products</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li className="logout-item">
            <button onClick={handleLogoutClick} className="logout-btn">Logout</button>
          </li>
        </ul>
      </nav>

      {showConfirm && (
        <div className="logout-popup">
          <div className="popup-box">
            <p>Are you sure you want to logout?</p>
            <div className="popup-buttons">
              <button onClick={confirmLogout} className="yes-btn">Yes</button>
              <button onClick={cancelLogout} className="no-btn">No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
