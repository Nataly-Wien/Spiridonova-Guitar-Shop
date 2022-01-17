import './footer-menu.scss';
import React from 'react';
import PropTypes from 'prop-types';

const FooterMenu = ({title, menuItems, type}) => {
  return (
    <section className={`footer-menu footer-menu--${type}`}>
      <h3 className="footer-menu__title footer-title">{title}</h3>
      <ul className="footer-menu__list">
        {menuItems.map((item) => {
          return (<li className="footer-menu__item" key={item.name}>
            <a className="footer-menu__link" href={`#${item.link}`}>{item.name}</a>
          </li>)
        })}
      </ul>
    </section>
  );
};

FooterMenu.propTypes = {
  title: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  })),
  type: PropTypes.string,
};

export default FooterMenu;
