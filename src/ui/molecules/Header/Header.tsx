import React from 'react';

export const Header = ({ children }: any) => {
  return (
    <div className="nav-links">
      <div className="nav-links__logo">
        <a href="/">
          <img src="/deezer.png" alt="" />
        </a>
      </div>
      <div className="nav-links__search">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav-links__logging">
        <a href="">
          <span>Log in</span>
        </a>
        <a href="">
          <span>Sign up</span>
        </a>
      </div>
    </div>
  );
};
