import './social.scss';
import React from 'react';
import {Link} from 'react-router-dom';
import {SOCIAL_DATA, getSocialIcon, AppRoutes} from '../../const';

const Social = () => {
  return (
    <ul className="footer__social social">
      {SOCIAL_DATA.map((item) => (<li className="social__item" key={item}>
        <Link className="social__link" to={AppRoutes.SHARP}>
          <span className="visually-hidden">{item}</span>
          {getSocialIcon(item)}
        </Link>
      </li>))}
    </ul>
  );
};

export default Social;
