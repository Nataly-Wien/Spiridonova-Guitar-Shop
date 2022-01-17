import './promo.scss';
import React from "react";

const Promo = () => {
  return (
    <section className="promo">
      <h3 className="promo__title">Промокод на скидку</h3>
      <p className="promo__text">Введите свой промокод, если он у вас есть.</p>
      <div className="promo__wrapper">
        <input className="promo__input" type="text" />
        <button className="promo__btn button button--grey" type="button">Применить купон</button>
      </div>
    </section>
  );
};

export default Promo;
