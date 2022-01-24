import './cart-page.scss';
import React from "react";
import Header from '../../header/header';
import Footer from '../../footer/footer';
import BreadCrumbs from '../../bread-crumbs/bread-crumbs';
import Cart from '../../cart/cart';
import Modal from '../../modal/modal';
import {Pages} from '../../../const';

const CartPage = () => {
  return (
    <div className="cart-page page">
      <Header page={Pages.NOT_MAIN} />
      <main className="cart-main container">
        <h1 className="cart-main__title">Корзина</h1>
        <BreadCrumbs />
        <Cart />
      </main>
      <Footer page={Pages.NOT_MAIN} />
      <Modal />
    </div >
  );
};

export default CartPage;
