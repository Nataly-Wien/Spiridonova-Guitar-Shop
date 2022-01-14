import './main-menu.scss';
import React from 'react';
import {MAIN_MENU_ITEMS} from '../../const';

const MainMenu = () => {

  return (
    <ul className="main-menu">
      {MAIN_MENU_ITEMS.map((item) => {
        return (
          <li className="main-menu__item" key={`${item.name}`}>
            <a className="main-menu__link" href={`#${item.link}`}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default MainMenu;
