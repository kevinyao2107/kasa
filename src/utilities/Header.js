import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <nav className='nav'>
        <div className='nav__logo'>
          <span>KASA</span>
        </div>
        <ul className='nav__items'>
          <li className='nav__item'>
            <Link
              className={`${
                location.pathname === '/' ? 'active-link' : ''
              }  nav__item-link`}
              to='/'
            >
              Accueil
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__item-link' to='/apropos'>
              A propos
            </Link>
          </li>
          <li className='nav__item'>
            <Link className='nav__item-link' to='/apropos'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
