import './message-modal.scss';
import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {ActionCreator} from '../../store/action';


const MessageModal = ({title, buttons, onCloseClick}) => {
  const dispatch = useDispatch();

  const firstFocusTarget = useRef(null);
  const lastFocusTarget = useRef(null);

  const handleKeydown = (evt) => {
    if (evt.key === 'Tab' && !evt.shiftKey && evt.target.closest(`.message-modal__close-btn`)) {
      evt.preventDefault();
      firstFocusTarget.current.focus();
    }

    if (evt.key === 'Tab' && evt.shiftKey && evt.target.closest(`.message-modal__btn--rusty`)) {
      evt.preventDefault();
      lastFocusTarget.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener(`keydown`, handleKeydown);

    return () => {
      document.removeEventListener(`keydown`, handleKeydown);
    };
  });

  return (
    <section className="message-modal modal">
      <h2 className="modal__title">{title}</h2>
      <div className="message-modal__btn-wrapper">
        <Link className={`modal__btn modal__btn--${buttons[0].type} button`} ref={firstFocusTarget}
          to={buttons[0].action} onClick={() => dispatch(ActionCreator.hideModal())}>{buttons[0].title}</Link>
        <button className={`modal__btn modal__btn--${buttons[1].type} button`} type="button" onClick={() => dispatch(ActionCreator[buttons[1].action]())}>{buttons[1].title} </button>
      </div>
      <button className="modal__close-btn" ref={lastFocusTarget} onClick={() => onCloseClick()}><span className="visually-hidden">Закрыть</span></button>
    </section>
  );
};

export default MessageModal;
