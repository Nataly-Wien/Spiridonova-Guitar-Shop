import './main-page.scss';
import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const MainPage = () => {
  return (
    <div className="main-page page">
      <Header />
      <main className="main">
        <h1 className="visually-hidden">Каталог</h1>
      </main>
      <Footer />
    </div >
  );
};

export default MainPage;
