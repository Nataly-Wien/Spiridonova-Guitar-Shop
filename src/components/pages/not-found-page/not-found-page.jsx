import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';

const NotFoundPage = () => {
  return (
    <div className="main-page page">
      <Header />
      <main className="main container">
        <h1 className="main__title main__title--not-found">404 Страница не найдена</h1>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
