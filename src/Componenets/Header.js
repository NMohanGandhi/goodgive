import React from 'react';
import './Header.css';
import companylogo from '../assets/companylogo.png';
import Cart from '../assets/Cart.png';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Left Section: Logo and Navigation */}
        <div className="header-left">
          <img src={companylogo} alt="Goodgive Logo" className="logo" />
          <nav className="nav-menu">
            <ul>
              <li className="dropdown">
                <a href="#">About <span className="arrow"></span></a>
              </li>
              <li><a href="#" className="highlight">Donate</a></li>
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">What We Do</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        {/* Right Section: Cart and Login */}
        <div className="header-right">
          <img src={Cart} alt="Cart Icon" className="cart-icon" />
          <button className="login-btn">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
