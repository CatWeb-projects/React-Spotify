import React from 'react';
import { Link } from 'react-router-dom';
import 'ui/molecules/Header/Header.scss';

export const Header = () => {
  return (
    <div className="nav-links">
      <div className="nav-links__logo">
        <Link to="/">
          <img src="./deezer.png" alt="deezer" />
        </Link>
      </div>
    </div>
  );
};
