import './cart-page.scss';
import React, {useRef} from "react";
import Header from '../../header/header';
import Footer from '../../footer/footer';
import BreadCrumbs from '../../bread-crumbs/bread-crumbs';
import Cart from '../../cart/cart';
import {CATALOG_LIST, loadImages} from '../../../const';

const CartPage = () => {
  const imgRef = useRef(null);

  const getImages = () => {
    if (imgRef.current === null) {
      imgRef.current = loadImages();
    }

    return imgRef.current;
  }

  getImages();

  return (
    <div className="cart-page page">
      <Header />
      <main className="cart-main container">
        <h1 className="cart-main__title">Корзина</h1>
        <BreadCrumbs />
        <Cart goodsList={CATALOG_LIST.slice(0, 2)} images={imgRef.current ? imgRef.current : {}} />
      </main>
      <Footer />
    </div >
  );
};

export default CartPage;
