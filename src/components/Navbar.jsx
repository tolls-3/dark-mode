import React, { useState } from 'react';
import useDarkMode from '.././hooks/useDarkMode'

const Navbar = () => {
  const [inputValue, setInputValue] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setInputValue(!inputValue);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={inputValue ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
