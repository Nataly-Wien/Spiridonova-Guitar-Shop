import './main-page.scss';
import React, {useState, useEffect} from 'react';
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
import {CARDS_PER_PAGE, Pages} from '../../../const';
import {CATALOG_LIST} from '../../../mock';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const catalogPosition = (currentPage - 1) * CARDS_PER_PAGE;

  const isDataLoaded = useSelector((state) => state.GOODS.isDataLoaded);
  const dispatch = useDispatch();

  !isDataLoaded && dispatch(ActionCreator.loadGoods(CATALOG_LIST));

  const filteredList = useSelector((state) => state.GOODS.filteredList);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredList]);

  return (
    <div className="main-page page">
      <Header page={Pages.MAIN} />
      <main className="main main-section container">
        <h1 className="main__title">Каталог гитар</h1>
        <BreadCrumbs />
        <Filters />
        <Sort />
        <Cards catalogList={filteredList.slice(catalogPosition, catalogPosition + CARDS_PER_PAGE)} />
        {filteredList.length > 0 && <Pagination length={filteredList.length} current={currentPage} setCurrentPage={setCurrentPage} />}
      </main>
      <Footer page={Pages.MAIN} />
      <Modal />
    </div >
  );
};

export default MainPage;
