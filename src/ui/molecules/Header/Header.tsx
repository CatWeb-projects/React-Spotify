import React from 'react';
import 'ui/molecules/Header/Header.scss';

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
