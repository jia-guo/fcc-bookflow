import React from 'react';
import { Link } from 'react-router-dom';

const renderMenuItems = (isLogin, curNav, handleNavClick) => {
  let items = isLogin 
    ? [
        {name: 'browse', link: '/browse', display: 'Browse Books'}, 
        {name: 'about', link: '/about', display: 'About'}, 
        {name: 'profile', link: '/profile', display: 'My Profile'}, 
        {name: 'logout', link: '/logout', display: 'Log Out'}
      ] 
    : [
        {name: 'browse', link: '/browse', display: 'Browse Books'}, 
        {name: 'about', link: '/about', display: 'About'}, 
        {name: 'login', link: '/login', display: 'Log In'}, 
        {name: 'signup', link: '/signup', display: 'Sign Up'}
      ];

  return items.map(item => (
    <Link
      key={item.name}
      name={item.name} 
      className={curNav === item.name ? "active" : ""}
      to={item.link}
      onClick={() => handleNavClick(item.name)}
    >
      <h3 className="font-weight-400 font-size-14">{item.display.toUpperCase()}</h3>
    </Link>
  ));
}

export default renderMenuItems;