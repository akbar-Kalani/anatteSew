



import React from 'react';

const HamburgerMenuIcon = ({ isOpen, onClick }) => {
  return (
    <div className="hamburger-menu-icon" onClick={onClick}>
      <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      <div className={`bar ${isOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default HamburgerMenuIcon;
