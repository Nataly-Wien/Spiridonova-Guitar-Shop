import './bread-crumbs.scss';
import PropTypes from 'prop-types';
import React from "react";

const BreadCrumbs = ({list}) => {
  return (
    <ul className="bread-crumbs">
      {list.map((item) => {
        return (
          <li className={`bread-crumbs__item`} key={`${item.path}`}>
            <a className={`bread-crumbs__link`} href={item.path}>{item.title}</a>
          </li>
        );
      })}
    </ul >
  )
};

BreadCrumbs.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string,
  })),
};

export default BreadCrumbs;
