import './social.scss';
import React from 'react';
import {SOCIAL_DATA, getSocialIcon} from '../../const';

const Social = () => {
  return (
    <ul className="footer__social social">
      {SOCIAL_DATA.map((item) => (<li className="social__item" key={item}>
        <a className="social__link" href="#">
          <span className="visually-hidden">{item}</span>
          {getSocialIcon(item)}
        </a>
      </li>))}
    </ul>
  );
};

export default Social;
