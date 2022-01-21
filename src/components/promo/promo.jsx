import './promo.scss';
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {PROMO_CODES, MODAL_POPUPS, PopupTypes} from '../../const';

const Promo = ({code}) => {
  const [promo, setPromo] = useState(code);
  const dispatch = useDispatch();

  const promoUnsuccess = () => {
    setPromo(code);
    dispatch(ActionCreator.showModal({
      modalType: PopupTypes.PROMO_UNSUCCESS,
      modalProps: MODAL_POPUPS.promoUnsuccess,
    }));
  };

  const handleApplyClick = () => {
    if (!promo.trim()) return;

    const code = PROMO_CODES.find((it) => it.promo === promo.toUpperCase().trim());

    return code ? dispatch(ActionCreator.setDiscount(code)) : promoUnsuccess();
  };

  return (
    <section className="promo">
      <h3 className="promo__title">Промокод на скидку</h3>
      <p className="promo__text">Введите свой промокод, если он у вас есть.</p>
      <div className="promo__wrapper">
        <input className="promo__input" type="text" value={promo} onChange={(evt) => setPromo(evt.target.value)} />
        <button className="promo__btn button button--grey" type="button" onClick={() => handleApplyClick()}>Применить купон</button>
      </div>
    </section>
  );
};

Promo.propTypes = {
  code: PropTypes.string,
};

export default Promo;
