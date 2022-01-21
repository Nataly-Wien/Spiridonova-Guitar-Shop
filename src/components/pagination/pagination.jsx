import './pagination.scss';
import React from "react";
import PropTypes from 'prop-types';
import {CARDS_PER_PAGE} from '../../const';

const Pagination = ({length, current, setCurrentPage}) => {
  const pagesNumber = length / CARDS_PER_PAGE === Math.floor(length / CARDS_PER_PAGE) ? Math.floor(length / CARDS_PER_PAGE) : Math.floor(length / CARDS_PER_PAGE) + 1;
  return (
    <section className="pagination">
      <h2 className="visually-hidden">Перейти на страницу каталога</h2>
      {current > 1 && <button className="pagination__button pagination__button--direction" type="button" onClick={() => setCurrentPage(current - 1)}>Назад</button>}
      <button className={`pagination__button${current === 1 ? ` pagination__button--current` : ``}`} type="button" onClick={() => current === 1 ? () => { } : setCurrentPage(1)}>1</button>
      {current === 1 && pagesNumber > 2 && <button className="pagination__button" type="button" onClick={() => setCurrentPage(2)}>{`2`}</button>}
      {pagesNumber > 3 && current > 2 && <span className="pagination__button">...</span>}
      {current > 1 && current < pagesNumber && <button className="pagination__button pagination__button--current" type="button">{current}</button>}
      {pagesNumber > current + 1 && current < pagesNumber && <span className="pagination__button">...</span>}
      {current === pagesNumber && pagesNumber > 2 && <button className="pagination__button" type="button" onClick={() => setCurrentPage(pagesNumber - 1)}>{pagesNumber - 1}</button>}
      {pagesNumber > 1 && <button className={`pagination__button${current === pagesNumber ? ` pagination__button--current` : ``}`} type="button" onClick={() => current === pagesNumber ? () => { } : setCurrentPage(pagesNumber)}>{pagesNumber}</button>}
      {current < pagesNumber && <button className="pagination__button pagination__button--direction" type="button" onClick={() => setCurrentPage(current + 1)}>Далее</button>}
    </section >
  );
};

Pagination.propTypes = {
  length: PropTypes.number,
  current: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default Pagination;
