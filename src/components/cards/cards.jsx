import './cards.scss';
import React from "react";
import PropTypes from 'prop-types';
import Card from './../card/card';
import {cardTypesValidation} from './../../types-validation/card-types-validation';

const Cards = ({catalogList, images}) => {
  return (
    <section className="cards">
      <h2 className="visually-hidden">Каталог</h2>
      <div className="cards-wrapper">
        {catalogList.map((item) => {
          return (< Card item={item} img={images[item.picture]} key={item.artNumber} />);
        })}
      </div>
    </section>
  );
};

Cards.propTypes = {
  catalogList: PropTypes.arrayOf(cardTypesValidation),
  images: PropTypes.shape(),
};

export default Cards;
