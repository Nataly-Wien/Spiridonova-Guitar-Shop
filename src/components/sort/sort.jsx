import './sort.scss';
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Sorts} from '../../const';


const Sort = () => {
  const dispatch = useDispatch();

  const [sort, setSort] = useState(Sorts.NONE);
  const [isLowToHigh, setIsLowToHigh] = useState(false);
  const [isHighToLow, setIsHighToLow] = useState(false);

  const handlePriceClick = () => {
    setSort(Sorts.PRICE);
    dispatch(ActionCreator.setCurrentSort(isHighToLow ? (a, b) => b.price - a.price : (a, b) => a.price - b.price));
  };

  const handlePopularityClick = () => {
    setSort(Sorts.POPULARITY);
    dispatch(ActionCreator.setCurrentSort(isHighToLow ? (a, b) => b.reviews - a.reviews : (a, b) => a.reviews - b.reviews));
  };

  const handleUpDirectionClick = () => {
    setIsLowToHigh(true);
    setIsHighToLow(false);

    switch (sort) {
      case Sorts.NONE:
        dispatch(ActionCreator.setCurrentSort((a, b) => a.price - b.price));
        break;

      case Sorts.PRICE:
        dispatch(ActionCreator.setCurrentSort((a, b) => a.price - b.price));
        break;

      case Sorts.POPULARITY:
        dispatch(ActionCreator.setCurrentSort((a, b) => a.reviews - b.reviews));
        break;

      default: return;
    }
  };

  const handleDownDirectionClick = () => {
    setIsLowToHigh(false);
    setIsHighToLow(true);

    switch (sort) {
      case Sorts.NONE:
        dispatch(ActionCreator.setCurrentSort((a, b) => b.price - a.price));
        break;

      case Sorts.PRICE:
        dispatch(ActionCreator.setCurrentSort((a, b) => b.price - a.price));
        break;

      case Sorts.POPULARITY:
        dispatch(ActionCreator.setCurrentSort((a, b) => b.reviews - a.reviews));
        break;

      default: return;
    }
  };

  return (
    <section className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <button className={`sort__btn sort__btn--text${sort === Sorts.PRICE ? ` sort__btn--current-sort` : ``} button`} type="button" onClick={handlePriceClick}>по цене</button>
      <button className={`sort__btn sort__btn--text${sort === Sorts.POPULARITY ? ` sort__btn--current-sort` : ``} button`} type="button" onClick={handlePopularityClick}>по популярности</button>
      <button className={`sort__btn sort__btn--up${isLowToHigh ? ` sort__btn--current-direction` : ``} button`} type="button" onClick={handleUpDirectionClick}>
        <svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.417.333H.584L7 10.416 13.417.333Z" fill="#6C6C6C" /></svg>
        <span className="visually-hidden">по возрастанию</span>
      </button>
      <button className={`sort__btn${isHighToLow ? ` sort__btn--current-direction` : ``} button`} type="button" onClick={handleDownDirectionClick}>
        <svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.417.333H.584L7 10.416 13.417.333Z" fill="#6C6C6C" /></svg>
        <span className="visually-hidden">по убыванию</span>
      </button>
    </section>
  );
};

export default Sort;
