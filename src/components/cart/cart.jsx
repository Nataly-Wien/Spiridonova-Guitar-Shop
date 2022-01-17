import './cart.scss';
import React from "react";
import PropTypes from 'prop-types';
import {cardTypesValidation} from './../../types-validation/card-types-validation';
import Good from './../good/good';
import Promo from './../promo/promo';
import {getMoneyFormat} from '../../const';

const Cart = ({goodsList, images}) => {
  const tot = 47000;
  // delete!

  return (
    <section className="cart">
      <ul className="cart__list">
        {goodsList.map((item) => {
          return (
            <li className="cart__item" key={item.title}>
              <Good good={item} goodImg={images[item.picture]} />
            </li>
          );
        })}
      </ul>
      <div className="cart__wrapper">
        <Promo />
        <div className="total__wrapper">
          <p className="cart__total">{`Всего: ${getMoneyFormat(tot)} ₽`}</p>
          <button className="cart__order-button button button--rusty" type="button">Оформить заказ</button>
        </div>
      </div>
    </section>
  );
};

Cart.propTypes = {
  goodsList: PropTypes.arrayOf(cardTypesValidation),
  images: PropTypes.shape(),
};

export default Cart;
