import './cart-modal.scss';
import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {GUITAR_TYPE, getMoneyFormat, MODAL_POPUPS, PopupTypes} from '../../const';

const CartModal = ({title, type, buttons, good, img, onCloseClick}) => {
  const firstFocusTarget = useRef(null);
  const lastFocusTarget = useRef(null);

  const dispatch = useDispatch();

  const onAddBtnClick = () => {
    dispatch(ActionCreator.addToCart(good));
    dispatch(ActionCreator.showModal({
      modalType: PopupTypes.CART_SUCCESS,
      modalProps: MODAL_POPUPS.success,
    }));
  };

  const onDeleteBtnClick = () => {
    dispatch(ActionCreator.deleteFromCart(good));
    dispatch(ActionCreator.hideModal());
  }

  const handleKeydown = (evt) => {
    if (evt.key === 'Tab' && !evt.shiftKey && evt.target.closest(`.cart-modal__close-btn`)) {
      evt.preventDefault();
      firstFocusTarget.current.focus();
    }

    if (evt.key === 'Tab' && evt.shiftKey && evt.target.closest(`.cart-modal__btn--rusty`)) {
      evt.preventDefault();
      lastFocusTarget.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handleKeydown);
    firstFocusTarget.current.focus();

    return () => {
      document.removeEventListener(`keydown`, handleKeydown);
    };
  });

  return (
    <section className="cart-modal modal">
      <h2 className="modal__title">{title}</h2>
      <div className="cart-modal__wrapper">
        <div className="cart-modal__card-wrapper">
          <img className="cart-modal__img" src={img} alt={`Фото ${good.title}`} />
          <div className="cart-modal__good-wrapper">
            <h3 className="cart-modal__good-title">{`Гитара ${good.title}`}</h3>
            <p className="cart-modal__good-info">{`Артикул: ${good.artNumber}`}</p>
            <p className="cart-modal__good-info">{`${GUITAR_TYPE[good.type]}, ${good.strings} струнная`}</p>
            <p className="cart-modal__good-price">{`Цена: ${getMoneyFormat(good.price)} ₽`}</p>
          </div>
        </div>
        <div className="cart-modal__btn-wrapper">
          <button className={`modal__btn modal__btn--${buttons[0].type} button`} type="button" ref={firstFocusTarget}
            onClick={type === PopupTypes.CART_ADD ? () => onAddBtnClick() : () => onDeleteBtnClick()}>{buttons[0].title}</button>
          {buttons[1] && <button className={`modal__btn modal__btn--${buttons[1].type} button`} type="button"
            onClick={() => dispatch(ActionCreator[buttons[1].action]())}>{buttons[1].title}</button>}
        </div>
      </div>
      <button className="modal__close-btn" ref={lastFocusTarget} onClick={() => onCloseClick()}><span className="visually-hidden">Закрыть</span></button>
    </section>
  );
};

export default CartModal;
