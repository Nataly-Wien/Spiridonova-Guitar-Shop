import './cart.scss';
import React from "react";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Good from './../good/good';
import Promo from './../promo/promo';
import {getMoneyFormat} from '../../const';

const Cart = () => {
  const {cart, goodImages, discountPercent, discountRoubles} = useSelector((state) => state.GOODS);
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  const discount = discountPercent * discountRoubles ? Math.min(discountPercent * total, discountRoubles) : Math.max(discountPercent * total, discountRoubles);

  return (
    <section className="cart">
      <ul className="cart__list">
        {cart.map((item) => {
          return (
            <li className="cart__item" key={item.title}>
              <Good good={item} goodImg={goodImages[item.picture]} />
            </li>
          );
        })}
      </ul>
      <div className="cart__wrapper">
        <Promo />
        <div className="total__wrapper">
          <p className="cart__total">{`Всего: ${getMoneyFormat(total - discount)} ₽`}</p>
          <Link className="cart__order-button button button--rusty" to="#">Оформить заказ</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
