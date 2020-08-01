import React from 'react';

const Header = () => {
  return (
      <header>
        <nav className={`navbar`} role="navigation" aria-label="main navigation">
          <div className={`navbar-brand`}>
            <a className={`navbar-item`} href="/">
              <img src="#" alt="Logo" />
            </a>
            <span role="button" className={`navbar-burger`} aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          <div className={`navbar-menu`}>
            <a className={`navbar-item`} href="/">
              Home
            </a>
          </div>
        </nav>
      </header>
  );
}

export default Header;
