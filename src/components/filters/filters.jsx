import './filters.scss';
import React, {useState, useMemo} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {FILTER_TYPE_DATA, FILTER_STRINGS_DATA, getMoneyFormat, getNum, getCorrectValue} from '../../const';

const Filters = () => {
  const {catalog, sortRule} = useSelector((state) => state.GOODS);

  const dispatch = useDispatch();

  const cataloPriceMin = useMemo(() => catalog.reduce((min, it) => min > it.price ? it.price : min, catalog[0].price), [catalog]);
  const cataloPriceMax = useMemo(() => catalog.reduce((max, it) => max < it.price ? it.price : max, catalog[0].price), [catalog]);

  const [priceFrom, setPiceFrom] = useState(cataloPriceMin);
  const [priceTo, setPiceTo] = useState(cataloPriceMax);
  const [type, setType] = useState({
    acoustic: true,
    electro: true,
    ukulele: true,
  });

  const [strings, setStrings] = useState({
    4: true,
    6: true,
    7: true,
    12: true,
  });

  const availableStrings = FILTER_TYPE_DATA.reduce((strings, it) => type[it.name] ? [...strings, ...it.strings] : strings, []);

  const onFilterButtonClick = () => {
    dispatch(ActionCreator.setFilteredList(catalog.filter((it) =>
      it.price >= priceFrom && it.price <= priceTo && type[it.type] && strings[it.strings]).sort(sortRule)));
  };

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
          <input className="filters-form__input" type="text" id="min-price" value={getMoneyFormat(priceFrom)}
            onChange={(evt) => setPiceFrom(getNum(evt.target.value))}
            onBlur={(evt) => setPiceFrom(getCorrectValue(getNum(evt.target.value), cataloPriceMin, priceTo))} />
          <span>—</span>
          <label htmlFor="max-price" className="visually-hidden">до</label>
          <input className="filters-form__input" type="text" id="max-price" value={getMoneyFormat(priceTo)}
            onChange={(evt) => setPiceTo(getNum(evt.target.value))}
            onBlur={(evt) => setPiceTo(getCorrectValue(getNum(evt.target.value), priceFrom, cataloPriceMax))} />
        </fieldset>
        <fieldset className="filters-form__fieldset filters-form__fieldset--checkbox">
          <legend className="filters-form__legend">Тип гитар</legend>
          {FILTER_TYPE_DATA.map((item) => {
            return (<div className="filters-form__checkbox-wrapper" key={item.name}>
              <input className="visually-hidden" type="checkbox" checked={type[item.name]} id={item.name}
                onChange={(evt) => setType({...type, [item.name]: evt.target.checked})} />
              <label className="filters-form__label" htmlFor={item.name}>{item.text}</label>
            </div>)
          })}
        </fieldset>
        <fieldset className="filters-form__fieldset filters-form__fieldset--checkbox">
          <legend className="filters-form__legend">Количество струн</legend>
          {FILTER_STRINGS_DATA.map((item) => {
            return (<div className="filters-form__checkbox-wrapper" key={item.name}>
              <input className="visually-hidden" type="checkbox" id={item.name} checked={strings[item.value]}
                onChange={(evt) => setStrings({...strings, [item.value]: evt.target.checked})}
                disabled={!availableStrings.find((it) => it === item.value)} />
              <label className="filters-form__label" htmlFor={item.name}>{item.value}</label>
            </div>)
          })}
        </fieldset>
      </form>
      <button className='filters__apply-button button button--grey' type="button" onClick={() => onFilterButtonClick()}>показать</button>

    </section>
  );
};

export default Filters;
