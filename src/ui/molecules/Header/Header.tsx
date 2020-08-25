import React from 'react';

export const Header = ({ children }: any) => {
  return (
    <div className="nav-links">
      <div className="nav-links__logo">
        <a href="/">
          <img src="/deezer.png" alt="" />
        </a>
      </div>
    </div>
  );
};
