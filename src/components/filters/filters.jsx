import './filters.scss';
import React from "react";
// import PropTypes from 'prop-types';
import {FILTER_TYPE_DATA, FILTER_STRINGS_DATA, getMoneyFormat} from '../../const';

// const Filters = ({type}) => {
const Filters = () => {
  const onFilterChange = () => {

  };

  return (
    <section className="filters">
      <button className='filters__open-button button' type="button">Фильтры</button>
      <h2 className="filters__title">Фильтр</h2>
      <form className="filters__form filters-form" action="#" onChange={() => onFilterChange()}>
        <fieldset className="filters-form__fieldset filters-form__fieldset--price">
          <legend className="filters-form__legend">Цена, ₽</legend>
          <label htmlFor="min-price" className="visually-hidden">от</label>
          <input className="filters-form__input" type="text" id="min-price" />
          <span>—</span>
          <label htmlFor="max-price" className="visually-hidden">до</label>
          <input className="filters-form__input" type="text" id="max-price" />
        </fieldset>
        <fieldset className="filters-form__fieldset filters-form__fieldset--checkbox">
          <legend className="filters-form__legend">Тип гитар</legend>
          {FILTER_TYPE_DATA.map((item) => {
            return (<div className="filters-form__checkbox-wrapper" key={item.name}>
              <input className="visually-hidden" type="checkbox" checked={true} id={item.name} />
              <label className="filters-form__label" htmlFor={item.name}>{item.text}</label>
            </div>)
          })}
        </fieldset>
        <fieldset className="filters-form__fieldset filters-form__fieldset--checkbox">
          <legend className="filters-form__legend">Количество струн</legend>
          {FILTER_STRINGS_DATA.map((item) => {
            return (<div className="filters-form__checkbox-wrapper" key={item.name}>
              <input className="visually-hidden" type="checkbox" checked={true} id={item.name} />
              <label className="filters-form__label" htmlFor={item.name}>{item.text}</label>
            </div>)
          })}
        </fieldset>
      </form>
      <button className='filters__apply-button button button--grey' type="button">показать</button>

    </section>
  );
};

// Filters.propTypes = {
//   type: PropTypes.string,
// };

export default Filters;
