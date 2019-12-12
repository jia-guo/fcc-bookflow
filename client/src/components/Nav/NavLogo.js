import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './NavLogo.css';

const NavLogo = ({ handleNavClick }) => (
  <Link className="nav-logo" to='/' >
    <img className="nav-logo-image" src={logo} onClick={() => handleNavClick('home')} alt="book flow logo" />
    <h1 className="nav-logo-title" onClick={() => handleNavClick('home')}>BOOK FLOW</h1>
  </Link>
)

export default NavLogo;
