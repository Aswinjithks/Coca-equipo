import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Logo from "@assets/images/logo-black.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import navLinks from '@data/navData';
import GoogleAuth from '@components/googleSignup';



const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedNavLink, setSelectedNavLink] = useState<string>('Home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (link: string) => {
    setSelectedNavLink(link);
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        <img src={Logo} alt="Logo" />
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.name} className="nav-item">
              <button
                className={`nav-item-btn ${selectedNavLink === link.name ? 'active' : ''}`}
                onClick={() => handleNavLinkClick(link.name)}
              >
                <Link to={link.path}>{link.name}</Link>
              </button>
            </li>
          ))}
        </ul>
        <GoogleAuth/>
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
