import './good.scss';
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {cardTypesValidation} from './../../types-validation/card-types-validation';
import {GUITAR_TYPE, CART_GOODS_MAX, MODAL_POPUPS, PopupTypes, getMoneyFormat, getNum, getNumString, getCorrectValue} from '../../const';

const Good = ({good}) => {
  const [numberInputValue, setNumberInputValue] = useState(`${good.count}`);
  const [number, setNumber] = useState(good.count);
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(ActionCreator.showModal({
      modalType: PopupTypes.CART_DELETE,
      modalProps: {
        ...MODAL_POPUPS.cartDelete,
        good: good,
      },
    }));
  };

  const setGoodNumber = (count) => {
    setNumber(count);
    setNumberInputValue(`${count}`);
    dispatch(ActionCreator.setGoodNumber({good, count}));
  };

  const handleMinusClick = () => {
    number === 1 ? handleDeleteClick() : setGoodNumber(getCorrectValue(number - 1, 1, CART_GOODS_MAX));
  }

  return (
    <section className="good" key={good.title}>
      <button className="good__delete-btn" type="button" onClick={handleDeleteClick}>
        <span className="visually-hidden">Удалить товар</span>
      </button>
      <img className="good__img" src={good.picture} alt={`Фото ${good.title}`} width="68" height="190" />
      <div className="good__title-wrapper">
        <h3 className="good__title">{`${GUITAR_TYPE[good.type]} ${good.title}`}</h3>
        <p className="good__info">{`Артикул: ${good.artNumber}`}</p>
        <p className="good__info">{`${GUITAR_TYPE[good.type]}, ${good.strings} струнная`}</p>
      </div>
      <p className="good__price">{`${getMoneyFormat(good.price)} ₽`}</p>
      <div className="good__btn-wrapper">
        <button className="good__btn good__btn--minus" type="button"
          onClick={handleMinusClick}>–
          <span className="visually-hidden">Уменьшить количество</span>
        </button>
        <input className="good__btn good__btn--input" type="text" value={numberInputValue}
          onChange={(evt) => setNumberInputValue(getNumString(evt.target.value))}
          onBlur={(evt) => {
            setGoodNumber(getCorrectValue(getNum(evt.target.value), 1, CART_GOODS_MAX));
          }} />
        <button className="good__btn good__btn--plus" type="button"
          onClick={() => setGoodNumber(getCorrectValue(number + 1, 1, CART_GOODS_MAX))}>+
          <span className="visually-hidden">Увеличить количество</span>
        </button>
      </div>
      <p className="good__sum-price">{`${getMoneyFormat(good.price * number)} ₽`}</p>
    </section>
  );
};

Good.propTypes = {
  good: cardTypesValidation,
};

export default Good;
