import './main-menu.scss';
import React from 'react';
import {MAIN_MENU_ITEMS} from '../../const';
import {Link} from 'react-router-dom';

const MainMenu = () => {

  return (
    <ul className="main-menu">
      {MAIN_MENU_ITEMS.map((item) => {
        return (
          <li className="main-menu__item" key={`${item.name}`}>
            <Link className="main-menu__link" to={item.link}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
