import './good.scss';
import React, {useState} from "react";
import PropTypes from 'prop-types';
import {cardTypesValidation} from './../../types-validation/card-types-validation';
import {GUITAR_TYPE, getMoneyFormat} from '../../const';

const Good = ({good, goodImg}) => {
  const [number, setNumber] = useState(1);

  const onMinusClick = () => {
    if (number > 1) {
      setNumber(number - 1)
    }
    else {



    }
  };

  return (
    <section className="good" key={good.title}>
      <button className="good__delete-btn"></button>
      <img className="good__img" src={goodImg} alt={`Фото ${good.title}`} width="68" height="190" />
      <div className="good__title-wrapper">
        <h3 className="good__title">{`${GUITAR_TYPE[good.type]} ${good.title}`}</h3>
        <p className="good__info">{`Артикул: ${good.artNumber}`}</p>
        <p className="good__info">{`${GUITAR_TYPE[good.type]}, ${good.strings} струнная`}</p>
      </div>
      <p className="good__price">{`${getMoneyFormat(good.price)} ₽`}</p>
      <div className="good__number-wrapper">
        <button className="good__number-btn good__number-btn--minus" type="button" onClick={() => onMinusClick()}>–</button>
        <input className="good__number-btn good__number-btn--input" type="text" value={number} onChange={(evt) => setNumber(+evt.target.value)} />
        <button className="good__number-btn good__number-btn--plus" type="button" onClick={() => setNumber(number + 1)}>+</button>
      </div>
      <p className="good__sum-price">{`${getMoneyFormat(good.price)} ₽`}</p>
    </section>
  );
};

Good.propTypes = {
  good: cardTypesValidation,
  goodImg: PropTypes.shape(),
};

export default Good;
