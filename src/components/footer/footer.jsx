import './footer.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo';
import Social from '../social/social';
import FooterMenu from '../footer-menu/footer-menu';
import {LogoTypes, CATALOG_MENU_ITEMS, FOOTER_INFO_ITEMS} from '../../const';

const Footer = ({page}) => {
  return (
    <footer className="footer">
      <div className="footer__decor"></div>
      <div className="footer__content">
        <div className="footer__wrapper container">
          <Logo type={LogoTypes.FOOTER} page={page} />
          <section className="footer__social">
            <h3 className="visually-hidden">Мы в социальных сетях</h3>
            <Social />
          </section>
          <section className="footer__section footer__section--about section">
            <h3 className="section__title footer-title">О нас</h3>
            <p className="section__text section__text--about">
              Магазин гитар, музыкальных&nbsp;инструментов и&nbsp;гитарная мастерская в Санкт-Петербурге.
            </p>
            <p className="section__text section__text--about">
              Все инструменты проверены,&nbsp;отстроены и доведены до идеала!
            </p>
          </section>
          <FooterMenu title={`Каталог`} menuItems={CATALOG_MENU_ITEMS} type={`catalog`} />
          <FooterMenu className="footer__section footer__section--info" title={`Информация`} menuItems={FOOTER_INFO_ITEMS} type={`info`} />
          <section className="footer__section footer__section--contacts section">
            <h3 className="section__title footer-title">Контакты</h3>
            <p className="section__text section__text--info">
              г.&nbsp;Санкт-Петербург, м.&nbsp;Невский проспект, ул.&nbsp;Казанская 6.
              <br />
              <a className="section__link" href="tel:88125005050">
                <span className="section__icon section__icon--phone"></span> 8-812-500-50-50
              </a>
            </p>
            <p className="section__text section__text--info">
              Режим работы:
              <br />
              <span className="section__icon section__icon--clock"></span> с 11:00 до 20:00, без&nbsp;выходных.
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  page: PropTypes.string,
};

export default Footer;
