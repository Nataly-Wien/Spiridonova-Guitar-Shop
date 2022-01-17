import './cards.scss';
import React from "react";
import PropTypes from 'prop-types';
import {getRatingStyle, getMoneyFormat} from '../../const';

const Cards = ({catalogList, images}) => {
  return (
    <section className="cards">
      <h2 className="visually-hidden">Каталог</h2>
      <div className="cards-wrapper">
        {catalogList.map((item) => {
          return (
            <section className="card" key={item.title}>
              <div className="card__buttons-wrapper">
                <button className="card__button button button--grey" type="button">Подробнее</button>
                <button className="card__button button button--rusty" type="button">
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
              <img className="card__img" src={images[item.picture]} alt={`Фото ${item.title}`} width="68" height="190" />
            </section>
          );
        })}
      </div>
    </section>
  );
};

Cards.propTypes = {
  catalogList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    picture: PropTypes.string,
    type: PropTypes.string,
    strings: PropTypes.number,
  })),
  images: PropTypes.shape(),
};

export default Cards;
