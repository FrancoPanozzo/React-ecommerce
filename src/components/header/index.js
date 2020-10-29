import './styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/shop" className="option">
          contact
        </Link>
        <Link to="/shop" className="option">
          sign in
        </Link>
      </div>
    </header>
  );
}
