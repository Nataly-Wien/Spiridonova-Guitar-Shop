import './cards.scss';
import React from "react";
import PropTypes from 'prop-types';
import Card from './../card/card';
import {cardTypesValidation} from './../../types-validation/card-types-validation';

const Cards = ({catalogList, images}) => {
  return (
    <section className={`cards${catalogList.length ? `` : ` cards--empty`}`}>
      <h2 className="visually-hidden">Каталог</h2>
      {catalogList && <div className="cards-wrapper">
        {catalogList.map((item) => {
          return (< Card item={item} img={images[item.picture]} key={item.artNumber} />);
        })}
      </div>}
      {!catalogList.length && <h3 className="cards__empty-message">Мы не смогли подобрать товары с такими характеристиками</h3>}
    </section>
  );
};

Cards.propTypes = {
  catalogList: PropTypes.arrayOf(cardTypesValidation),
  images: PropTypes.shape(),
};

export default Cards;
