import './header.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import MainMenu from '../main-menu/main-menu';
import UserNav from '../user-nav/user-nav';
import {LogoTypes} from '../../const';

const Header = ({page}) => {
  const isMobileMenuOpen = useSelector((state) => state.APPEARANCE.isMobileMenuOpen);

  return (
    <header className="header">
      <div className="header__wrapper">
        <nav className={`header__main-nav${isMobileMenuOpen ? ` header__main-nav--open` : ``} container`}>
          <button className={"header__menu-button"} type="button" aria-label="Меню сайта" >
            <span></span>
          </button>
          <div className={`header__logo-wrapper${isMobileMenuOpen ? ` header__logo-wrapper--open` : ``}`}>
            <Logo type={LogoTypes.HEADER} page={page} />
          </div>
          <div className={`header__menu${!isMobileMenuOpen ? ` header__menu--hidden` : ``}`}>
            {isMobileMenuOpen && <button className={"header__close-button"} type="button">
              <span className="visually-hidden">Закрыть меню</span>
            </button>}
            <MainMenu />
          </div>
          <UserNav />
        </nav>
      </div>
      <div className="header__decor"></div>
      <span className="header__decor-line"></span>
    </header>
  );
};

Logo.propTypes = {
  page: PropTypes.string,
};

export default Header;
