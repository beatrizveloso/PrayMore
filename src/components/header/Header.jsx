import React from 'react';

const Header = ({ logo }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Comandou" className="logo" />
      </div>
      <p>Comanda Virtual + Cardápio Digital</p>
    </header>
  );
};

export default Header;