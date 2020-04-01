import React, { Fragment } from 'react';

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className={`navbar`} role="navigation" aria-label="main navigation">
          <div className={`navbar-brand`}>
            <a className={`navbar-item`} href="#">
              <img src="#" alt="Logo" width="112" height="28" />
            </a>
            <a role="button" className={`navbar-burger`} aria-label="menu" aria-expanded="false">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu`}>
            <a className={`navbar-item`} href="#">
              Home
            </a>
          </div>
        </nav>
      </header>
    </Fragment>
  );
}

export default Header;
