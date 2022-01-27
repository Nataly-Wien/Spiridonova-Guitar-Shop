import './promo.scss';
import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {PROMO_CODES, MODAL_POPUPS, PopupTypes} from '../../const';

const Promo = ({code, focusRef}) => {
  const [promo, setPromo] = useState(code);

  const discount = useSelector((state) => state.GOODS.promoDiscount);
  const dispatch = useDispatch();

  const promoUnsuccess = () => {
    setPromo(code);
    dispatch(ActionCreator.showModal({
      modalType: PopupTypes.PROMO_UNSUCCESS,
      modalProps: MODAL_POPUPS.promoUnsuccess,
    }));
  };

  const handleApplyClick = (evt) => {
    evt.preventDefault();

    if (!promo.trim()) return;

    focusRef.current.focus();
    const code = PROMO_CODES.find((it) => it.promo === promo.toUpperCase().trim());

    return code ? dispatch(ActionCreator.setDiscount(code)) : promoUnsuccess();
  };

  return (
    <form className="promo">
      <h3 className="promo__title">Промокод на скидку</h3>
      <label className="promo__text" htmlFor="promo">Введите свой промокод, если он у вас есть.</label>
      <div className="promo__wrapper">
        <input className={`promo__input${discount.promo === `` ? `` : ` promo__input--discount`}`} type="text" id="promo" value={promo} onChange={(evt) => setPromo(evt.target.value)} />
        <input className="promo__btn button button--grey" type="submit" value={`Применить купон`} onSubmit={(evt) => handleApplyClick(evt)}
          onClick={(evt) => handleApplyClick(evt)} />
      </div>
    </form>
  );
};

Promo.propTypes = {
  code: PropTypes.string,
  focusRef: PopupTypes.ref,
};

export default Promo;
