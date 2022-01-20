import './good.scss';
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {cardTypesValidation} from './../../types-validation/card-types-validation';
import {GUITAR_TYPE, CART_GOODS_MAX, MODAL_POPUPS, PopupTypes, getMoneyFormat, getNum, getCorrectValue} from '../../const';

const Good = ({good, goodImg}) => {
  const [number, setNumber] = useState(good.count);
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(ActionCreator.showModal({
      modalType: PopupTypes.CART_DELETE,
      modalProps: {
        ...MODAL_POPUPS.cartDelete,
        good: good,
        img: goodImg,
      },
    }));
  };

  const setGoodNumber = (count) => {
    setNumber(count);
    dispatch(ActionCreator.setGoodNumber({good, count}));
  };

  return (
    <section className="good" key={good.title}>
      <button className="good__delete-btn" type="button" onClick={() => onDeleteClick()}></button>
      <img className="good__img" src={goodImg} alt={`Фото ${good.title}`} width="68" height="190" />
      <div className="good__title-wrapper">
        <h3 className="good__title">{`${GUITAR_TYPE[good.type]} ${good.title}`}</h3>
        <p className="good__info">{`Артикул: ${good.artNumber}`}</p>
        <p className="good__info">{`${GUITAR_TYPE[good.type]}, ${good.strings} струнная`}</p>
      </div>
      <p className="good__price">{`${getMoneyFormat(good.price)} ₽`}</p>
      <div className="good__btn-wrapper">
        <button className="good__btn good__btn--minus" type="button"
          onClick={() => setGoodNumber(getCorrectValue(number - 1, 1, CART_GOODS_MAX))}>–</button>
        <input className="good__btn good__btn--input" type="text" value={number}
          onChange={(evt) => setNumber(getCorrectValue(getNum(evt.target.value), 1, CART_GOODS_MAX))}
          onBlur={(evt) => setGoodNumber(evt.target.value)} />
        <button className="good__btn good__btn--plus" type="button"
          onClick={() => setGoodNumber(getCorrectValue(number + 1, 1, CART_GOODS_MAX))}>+</button>
      </div>
      <p className="good__sum-price">{`${getMoneyFormat(good.price * number)} ₽`}</p>
    </section>
  );
};

Good.propTypes = {
  good: cardTypesValidation,
  goodImg: PropTypes.string,
};

export default Good;
