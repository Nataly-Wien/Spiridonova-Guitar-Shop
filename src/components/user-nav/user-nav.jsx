import './user-nav.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {USER_NAV_ITEMS, getUserNavIcon} from '../../const';

const UserNav = ({isOpen}) => {
  const basketAmount = 2;

  return (
    <ul className={`header__user-nav user-nav ${isOpen ? ` user-nav--mobile-open` : ``}`}>
      {USER_NAV_ITEMS.map((item) => {
        return (
          <li className={`user-nav__item`} key={`${item.icon}`}>
            <a className={`user-nav__link`} href={item.link}>
              {getUserNavIcon(item.icon)}
              <span className={`user-nav__text visually-hidden`}>{item.name}</span>
              {item.icon === `basket` && <p className={`user-nav__basket-amount`}>{basketAmount}</p>}
            </a>
          </li>
        );
      })}
    </ul >
  );
};

UserNav.propTypes = {
  isOpen: PropTypes.bool,
};

export default UserNav;
