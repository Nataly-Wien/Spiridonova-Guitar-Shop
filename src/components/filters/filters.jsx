/* eslint-disable react-hooks/exhaustive-deps */
import './filters.scss';
import React, {useState, useEffect, useMemo} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {FILTER_TYPE_DATA, FILTER_STRINGS_DATA, getMoneyFormat, getNum, getNumString, getCorrectValue} from '../../const';

const Filters = () => {
  const catalog = useSelector((state) => state.GOODS.catalog);
  const sortRule = useSelector((state) => state.GOODS.sortRule);
  const filters = useSelector((state) => state.GOODS.filters);

  const dispatch = useDispatch();

  const [filteredCatalog, setFilteredCatalog] = useState(catalog);

  const catalogPriceMin = useMemo(() => catalog.reduce((min, it) => min > it.price ? it.price : min, catalog[0].price), [catalog]);
  const catalogPriceMax = useMemo(() => catalog.reduce((max, it) => max < it.price ? it.price : max, catalog[0].price), [catalog]);

  const [inputPriceFrom, setInputPriceFrom] = useState(``);
  const [inputPriceTo, setInputPriceTo] = useState(``);

  const [userPriceFrom, setUserPriceFrom] = useState(0);
  const [userPriceTo, setUserPriceTo] = useState(0);

  const [placeholderFrom, setPlaceholderFrom] = useState(catalogPriceMin);
  const [placeholderTo, setPlaceholderTo] = useState(catalogPriceMax);

  const [type, setType] = useState(filters.type ? filters.type : {
    acoustic: false,
    electro: false,
    ukulele: false,
  });

  const [strings, setStrings] = useState(filters.strings ? filters.strings : {
    4: false,
    6: false,
    7: false,
    12: false,
  });

  const availableStrings = useMemo(() => Object.values(type).reduce((total, it) => total || it, false) ?
    FILTER_TYPE_DATA.reduce((strings, it) => type[it.name] ? [...strings, ...it.strings] : strings, []) :
    FILTER_TYPE_DATA.reduce((strings, it) => [...strings, ...it.strings], []), [type]);

  const typeWithEmptyCheckboxes = useMemo(() => Object.values(type).reduce((total, it) => total || it, false) ? type :
    Object.entries(type).map((it) => [it[0], true]).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }), {}), [type]);

  const stringsWithEmptyCheckboxes = useMemo(() => Object.values(strings).reduce((total, it) => total || it, false) &&
    Object.entries(strings).filter((it) => it[1] === true && availableStrings.find((item) => item === +it[0])).length > 0 ? strings :
    Object.entries(strings).map((it) => [it[0], true]).reduce((acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }), {}), [strings, availableStrings]);

  const handleFilterButtonClick = () => {
    setFilteredCatalog(catalog.filter((it) => typeWithEmptyCheckboxes[it.type] && stringsWithEmptyCheckboxes[it.strings]).sort((a, b) => a.price - b.price));

    setPlaceholderFrom(filteredCatalog[0].price < userPriceTo || userPriceTo === 0 ? filteredCatalog[0].price : catalogPriceMin);
    setPlaceholderTo(filteredCatalog[filteredCatalog.length - 1].price > userPriceFrom ? filteredCatalog[filteredCatalog.length - 1].price : catalogPriceMax);

    const currentPriceFrom = userPriceFrom !== 0 ? userPriceFrom : filteredCatalog[0].price;
    const currentPriceTo = userPriceTo !== 0 ? userPriceTo : filteredCatalog[filteredCatalog.length - 1].price;

    dispatch(ActionCreator.setFilteredList(catalog.filter((it) =>
      it.price >= currentPriceFrom && it.price <= currentPriceTo && typeWithEmptyCheckboxes[it.type] && stringsWithEmptyCheckboxes[it.strings])
      .sort(sortRule)));
  };

  const handlePriceFromBlur = (value) => {
    if (value === ``) {return }

    if (getNum(value) >= catalogPriceMin) {
      const price = getCorrectValue(getNum(value), catalogPriceMin, userPriceTo !== 0 ? userPriceTo : placeholderTo);
      setInputPriceFrom(getMoneyFormat(price));
      setUserPriceFrom(price);
    } else {
      setInputPriceFrom(``);
      setUserPriceFrom(0);
    }
  };

  const handlePriceToBlur = (value) => {
    if (value === ``) {return }

    if (getNum(value) <= catalogPriceMax) {
      const price = getCorrectValue(getNum(value), userPriceFrom !== 0 ? userPriceFrom : placeholderFrom, catalogPriceMax);
      setInputPriceTo(getMoneyFormat(price));
      setUserPriceTo(price);
    } else {
      setInputPriceTo(``);
      setUserPriceTo(0);
    }
  };

  useEffect(() => {
    dispatch(ActionCreator.seFilters({priceFrom: userPriceFrom !== 0 ? userPriceFrom : placeholderFrom, priceTo: userPriceTo !== 0 ? userPriceTo : placeholderTo, type, strings}));
    setFilteredCatalog(catalog.filter((it) => typeWithEmptyCheckboxes[it.type] && stringsWithEmptyCheckboxes[it.strings]).sort((a, b) => a.price - b.price));

  }, [userPriceFrom, userPriceTo, type, strings, dispatch]);

  return (
    <section className="filters">
      <button className='filters__open-button button' type="button">Фильтры</button>
      <h2 className="filters__title">Фильтр</h2>
      <form className="filters__form filters-form" action="#">
        <fieldset className="filters-form__fieldset filters-form__fieldset--price">
          <legend className="filters-form__legend">Цена, ₽</legend>
          <label htmlFor="min-price" className="visually-hidden">от</label>
          <input className="filters-form__input" type="text" id="min-price" value={inputPriceFrom} placeholder={getMoneyFormat(placeholderFrom)}
            onFocus={(evt) => setInputPriceFrom(getNumString(evt.target.value))}
            onChange={(evt) => setInputPriceFrom(getNumString(evt.target.value))}
            onBlur={(evt) => handlePriceFromBlur(evt.target.value)} />
          <span>—</span>
          <label htmlFor="max-price" className="visually-hidden">до</label>
          <input className="filters-form__input" type="text" id="max-price" value={inputPriceTo} placeholder={getMoneyFormat(placeholderTo)}
            onFocus={(evt) => setInputPriceTo(getNumString(evt.target.value))}
            onChange={(evt) => setInputPriceTo(getNumString(evt.target.value))}
            onBlur={(evt) => handlePriceToBlur(evt.target.value)} />
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
