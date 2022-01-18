import './cart-page.scss';
import React from "react";
import {useSelector} from 'react-redux';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import BreadCrumbs from '../../bread-crumbs/bread-crumbs';
import Cart from '../../cart/cart';
import Modal from '../../modal/modal';

const CartPage = () => {
  const {cart, goodImages} = useSelector((state) => state.GOODS);

  return (
    <div className="cart-page page">
      <Header />
      <main className="cart-main container">
        <h1 className="cart-main__title">Корзина</h1>
        <BreadCrumbs />
        <Cart goodsList={cart} images={goodImages} />
      </main>
      <Footer />
      <Modal />
    </div >
  );
};

export default CartPage;
