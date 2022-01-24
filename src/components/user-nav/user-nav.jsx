import './user-nav.scss';
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {USER_NAV_ITEMS, getUserNavIcon} from '../../const';

const UserNav = ({isOpen}) => {
  const cart = useSelector((state) => state.GOODS.cart);
  const basketAmount = cart.reduce((sum, it) => sum = sum + it.count, 0);

  return (
    <ul className={`header__user-nav user-nav ${isOpen ? ` user-nav--mobile-open` : ``}`}>
      {USER_NAV_ITEMS.map((item) => {
        return (
          <li className={`user-nav__item`} key={`${item.icon}`}>
            <Link className={`user-nav__link`} to={item.link}>
              {getUserNavIcon(item.icon)}
              <span className={`user-nav__text visually-hidden`}>{item.name}</span>
              {item.icon === `basket` && basketAmount > 0 && <p className={`user-nav__basket-amount`}>{basketAmount}</p>}
            </Link>
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
