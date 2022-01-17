import './main-page.scss';
import React, {useRef} from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import BreadCrumbs from '../../bread-crumbs/bread-crumbs';
import Filters from '../../filters/filters';
import Sort from '../../sort/sort';
import Cards from '../../cards/cards';
import Pagination from '../../pagination/pagination';
import {CATALOG_LIST, loadImages} from '../../../const';

const MainPage = () => {
  const imgRef = useRef(null);

  const getImages = () => {
    if (imgRef.current === null) {
      imgRef.current = loadImages();
    }

    return imgRef.current;
  }

  getImages();

  return (
    <div className="main-page page">
      <Header />
      <main className="main container">
        <h1 className="main__title">Каталог гитар</h1>
        <BreadCrumbs />
        <Filters />
        <Sort />
        <Cards catalogList={CATALOG_LIST} images={imgRef.current ? imgRef.current : {}} />
        <Pagination length={55} current={1} />
        {/* <Pagination length={CATALOG_LIST.length} current={1} /> */}
      </main>
      <Footer />
    </div >
  );
};

export default MainPage;
