import './sort.scss';
import React from "react";

const Sort = () => {
  return (
    <section className="sort">
      <h2 className="sort__title">Сортировать:</h2>
      <button className='sort__btn sort__btn--text sort__btn--current-sort button' type="button">по цене</button>
      <button className='sort__btn sort__btn--text button' type="button">по популярности</button>
      <button className='sort__btn sort__btn--up sort__btn--current-direction button' type="button">
        <svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.417.333H.584L7 10.416 13.417.333Z" fill="#6C6C6C" /></svg>
      </button>
      <button className='sort__btn button' type="button">
        <svg width="14" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.417.333H.584L7 10.416 13.417.333Z" fill="#6C6C6C" /></svg>
      </button>
    </section>
  );
};

export default Sort;
