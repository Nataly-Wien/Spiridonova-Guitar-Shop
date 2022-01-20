import './cart-page.scss';
import React from "react";
import Header from '../../header/header';
import Footer from '../../footer/footer';
import BreadCrumbs from '../../bread-crumbs/bread-crumbs';
import Cart from '../../cart/cart';
import Modal from '../../modal/modal';

const CartPage = () => {
  return (
    <div className="cart-page page">
      <Header />
      <main className="cart-main container">
        <h1 className="cart-main__title">Корзина</h1>
        <BreadCrumbs />
        <Cart />
      </main>
      <Footer />
      <Modal />
    </div >
  );
};

export default CartPage;
