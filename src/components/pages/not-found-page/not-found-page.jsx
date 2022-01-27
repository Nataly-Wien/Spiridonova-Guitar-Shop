import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import {Pages} from '../../../const';

const NotFoundPage = () => {
  return (
    <div className="main-page page">
      <Header page={Pages.NOT_MAIN} />
      <main className="main main-section container">
        <h1 className="main__title main__title--not-found">404 Страница не найдена</h1>
      </main>
      <Footer page={Pages.NOT_MAIN} />
    </div>
  );
};

export default NotFoundPage;
