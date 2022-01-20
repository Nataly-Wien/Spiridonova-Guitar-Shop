import './sort.scss';
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {Sorts} from '../../const';


const Sort = () => {
  const dispatch = useDispatch();

  const [sort, setSort] = useState(Sorts.NONE);
  const [isLowToHigh, setIsLowToHigh] = useState(``);

  const onPriceClick = () => {
    setSort(Sorts.PRICE);
    dispatch(ActionCreator.setCurrentSort((a, b) => a.price - b.price));
  };

  const onPopularityClick = () => {
    setSort(Sorts.POPULARITY);
    dispatch(ActionCreator.setCurrentSort((a, b) => a.reviews - b.reviews));
  };

  const onDirectionClick = (value) => {
    if (value !== isLowToHigh) {
      setIsLowToHigh(value);

      if (sort !== Sorts.NONE) {
        dispatch(ActionCreator.reverseSortDirection());
      };
    }
  };

  return (
    <section className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <button className={`sort__btn sort__btn--text${sort === Sorts.PRICE ? ` sort__btn--current-sort` : ``} button`} type="button" onClick={() => onPriceClick()}>по цене</button>
      <button className={`sort__btn sort__btn--text${sort === Sorts.POPULARITY ? ` sort__btn--current-sort` : ``} button`} type="button" onClick={() => onPopularityClick()}>по популярности</button>
      <button className={`sort__btn sort__btn--up${isLowToHigh ? ` sort__btn--current-direction` : ``} button`} type="button" onClick={() => onDirectionClick(true)}>
        <svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.417.333H.584L7 10.416 13.417.333Z" fill="#6C6C6C" /></svg>
      </button>
      <button className={`sort__btn${!isLowToHigh ? ` sort__btn--current-direction` : ``} button`} type="button" onClick={() => onDirectionClick(false)}>
        <svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.417.333H.584L7 10.416 13.417.333Z" fill="#6C6C6C" /></svg>
      </button>
    </section>
  );
};

export default Sort;
