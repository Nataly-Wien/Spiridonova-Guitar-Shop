import './filters.scss';
import React, {useState, useEffect, useMemo} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {FILTER_TYPE_DATA, FILTER_STRINGS_DATA, getMoneyFormat, getNum, getCorrectValue} from '../../const';

const Filters = () => {
  const {catalog} = useSelector((state) => state.GOODS);
  const {sortRule} = useSelector((state) => state.GOODS);
  const {filters} = useSelector((state) => state.GOODS);

  const dispatch = useDispatch();

  const catalogPriceMin = useMemo(() => catalog.reduce((min, it) => min > it.price ? it.price : min, catalog[0].price), [catalog]);
  const catalogPriceMax = useMemo(() => catalog.reduce((max, it) => max < it.price ? it.price : max, catalog[0].price), [catalog]);

  const [priceFrom, setPriceFrom] = useState(filters.priceFrom !== 0 ? filters.priceFrom : catalogPriceMin);
  const [priceTo, setPriceTo] = useState(filters.priceTo !== 0 ? filters.priceTo : catalogPriceMax);

  const [type, setType] = useState(filters.type ? filters.type : {
    acoustic: true,
    electro: true,
    ukulele: true,
  });

  const [strings, setStrings] = useState(filters.strings ? filters.strings : {
    4: true,
    6: true,
    7: true,
    12: true,
  });

  const availableStrings = FILTER_TYPE_DATA.reduce((strings, it) => type[it.name] ? [...strings, ...it.strings] : strings, []);

  const handleFilterButtonClick = () => {
    dispatch(ActionCreator.setFilteredList(catalog.filter((it) =>
      it.price >= priceFrom && it.price <= priceTo && type[it.type] && strings[it.strings]).sort(sortRule)));
  };

  useEffect(() => {
    dispatch(ActionCreator.seFilters({priceFrom, priceTo, type, strings}));
  }, [priceFrom, priceTo, type, strings, dispatch]);

  return (
    <section className="filters">
      <button className='filters__open-button button' type="button">Фильтры</button>
      <h2 className="filters__title">Фильтр</h2>
      <form className="filters__form filters-form" action="#">
        <fieldset className="filters-form__fieldset filters-form__fieldset--price">
          <legend className="filters-form__legend">Цена, ₽</legend>
          <label htmlFor="min-price" className="visually-hidden">от</label>
          <input className="filters-form__input" type="text" id="min-price" value={getMoneyFormat(priceFrom)}
            onChange={(evt) => setPriceFrom(getNum(evt.target.value))}
            onBlur={(evt) => setPriceFrom(getCorrectValue(getNum(evt.target.value), catalogPriceMin, priceTo))} />
          <span>—</span>
          <label htmlFor="max-price" className="visually-hidden">до</label>
          <input className="filters-form__input" type="text" id="max-price" value={getMoneyFormat(priceTo)}
            onChange={(evt) => setPriceTo(getNum(evt.target.value))}
            onBlur={(evt) => setPriceTo(getCorrectValue(getNum(evt.target.value), priceFrom, catalogPriceMax))} />
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
      <button className='filters__apply-button button button--grey' type="button" onClick={handleFilterButtonClick}>показать</button>
    </section>
  );
};

export default Filters;
