import './card.scss';
import React from "react";
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {cardTypesValidation} from './../../types-validation/card-types-validation';
import {getRatingStyle, getMoneyFormat, MODAL_POPUPS, PopupTypes} from '../../const';
import {Link} from 'react-router-dom';

const Card = ({item, img}) => {
  const dispatch = useDispatch();

  const onBuyClick = () => {
    dispatch(ActionCreator.showModal({
      modalType: PopupTypes.CART_ADD,
      modalProps: {...MODAL_POPUPS.cartAdd, good: item, img: img},
    }));
  };

  return (
    <section className="card" key={item.title}>
      <div className="card__buttons-wrapper">
        <Link className="card__button button button--grey" to="#">Подробнее</Link>
        <button className="card__button button button--rusty" type="button" onClick={() => onBuyClick()}>
          <span className="card__buy-icon"></span>
          Купить
        </button>
      </div>
      <div className="card__title-wrapper">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__price">{`${getMoneyFormat(item.price)} ₽`}</p>
      </div>
      <div className="card__rating-wrapper">
        <div className="card__rating">
          <span className="card__full-stars" style={getRatingStyle(item.rating)}></span>
        </div>
        <p className="card__reviews">{item.reviews}</p>
      </div>
      <img className="card__img" src={img} alt={`Фото ${item.title}`} width="68" height="190" />
    </section>
  );
};

Card.propTypes = {
  item: cardTypesValidation,
  img: PropTypes.string,
};

export default Card;
