import './main-page.scss';
import React, {useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import BreadCrumbs from '../../bread-crumbs/bread-crumbs';
import Filters from '../../filters/filters';
import Sort from '../../sort/sort';
import Cards from '../../cards/cards';
import Pagination from '../../pagination/pagination';
import Modal from '../../modal/modal';
import {CATALOG_LIST, CARDS_PER_PAGE, loadImages} from '../../../const';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const catalogPosition = (currentPage - 1) * CARDS_PER_PAGE;

  const {isDataLoaded, isPicturesLoaded} = useSelector((state) => state.GOODS);
  const dispatch = useDispatch();
  const imgRef = useRef(null);

  if (imgRef.current === null) {
    imgRef.current = loadImages();
  }

  !isDataLoaded && dispatch(ActionCreator.loadGoods(CATALOG_LIST));
  !isPicturesLoaded && imgRef.current && dispatch(ActionCreator.loadGoodImages(imgRef.current));

  const {filteredList, goodImages} = useSelector((state) => state.GOODS);

  return (
    <div className="main-page page">
      <Header />
      <main className="main container">
        <h1 className="main__title">Каталог гитар</h1>
        <BreadCrumbs />
        <Filters />
        <Sort />
        <Cards catalogList={filteredList.slice(catalogPosition, catalogPosition + CARDS_PER_PAGE)} images={goodImages} />
        {filteredList.length > 0 && <Pagination length={filteredList.length} current={currentPage} setCurrentPage={setCurrentPage} />}
      </main>
      <Footer />
      <Modal />
    </div >
  );
};

export default MainPage;
