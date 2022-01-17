import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import CartPage from '../pages/cart-page/cart-page';
import NotFound from '../pages/not-found-page/not-found-page';
import {AppRoutes} from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.CATALOG} element={<MainPage />} />
        <Route path={AppRoutes.CART} element={<CartPage />} />
        <Route path="*" element={< NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
