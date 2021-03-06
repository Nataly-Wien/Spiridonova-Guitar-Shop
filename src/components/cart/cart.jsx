import './cart.scss';
import React, {useRef} from "react";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Good from './../good/good';
import Promo from './../promo/promo';
import {getMoneyFormat} from '../../const';

const Cart = () => {
  const cart = useSelector((state) => state.GOODS.cart);
  const promoDiscount = useSelector((state) => state.GOODS.promoDiscount);
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  const discount = promoDiscount.percent * promoDiscount.roubles ? Math.min(promoDiscount.percent * total, promoDiscount.roubles) : Math.max(promoDiscount.percent * total, promoDiscount.roubles);
  const totalPrice = total > 0 ? total - discount : total;

  const btnRef = useRef(null);

  return (
    <section className="cart">
      <h2 className="visually-hidden">Сейчас в корзине</h2>
      <ul className="cart__list">
        {cart.map((item) => {
          return (
            <li className="cart__item" key={item.title}>
              <Good good={item} />
            </li>
          );
        })}
      </ul>
      <div className="cart__wrapper">
        <Promo code={promoDiscount.promo} focusRef={btnRef} />
        <div className="cart__total-wrapper">
          <p className="cart__total">{`Всего: ${getMoneyFormat(totalPrice)} ₽`}</p>
          <Link className="cart__order-button button button--rusty" ref={btnRef} to="#">Оформить заказ</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
