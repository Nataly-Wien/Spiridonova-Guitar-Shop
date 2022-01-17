import './pagination.scss';
import React from "react";
import PropTypes from 'prop-types';
import {CARDS_PER_PAGE} from '../../const';

const Pagination = ({length, current}) => {
  const pagesNumber = length / CARDS_PER_PAGE === Math.floor(length / CARDS_PER_PAGE) ? Math.floor(length / CARDS_PER_PAGE) : Math.floor(length / CARDS_PER_PAGE) + 1;
  console.log(pagesNumber, current);
  return (
    <section className="pagination">
      <h2 className="visually-hidden">Страницы каталога</h2>
      {current > 1 && <button className="pagination__button pagination__button--direction" type="button">Назад</button>}
      <button className={`pagination__button${current === 1 ? ` pagination__button--current` : ``}`} type="button">1</button>
      {current === 1 && pagesNumber > 2 && <span className="pagination__button">{`2`}</span>}
      {pagesNumber > 3 && current > 2 && <span className="pagination__button">...</span>}
      {current > 1 && current < pagesNumber && <button className="pagination__button pagination__button--current" type="button">{current}</button>}
      {pagesNumber > current + 1 && current < pagesNumber && <span className="pagination__button">...</span>}
      {current === pagesNumber && pagesNumber > 2 && <button className="pagination__button" type="button">{pagesNumber - 1}</button>}
      {pagesNumber > 1 && <button className={`pagination__button${current === pagesNumber ? ` pagination__button--current` : ``}`} type="button">{pagesNumber}</button>}
      {current < pagesNumber && <button className="pagination__button pagination__button--direction" type="button">Далее</button>}
    </section >
  );
};

Pagination.propTypes = {
  length: PropTypes.number,
  current: PropTypes.number,
};

export default Pagination;
