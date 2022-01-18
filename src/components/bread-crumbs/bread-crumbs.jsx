import './bread-crumbs.scss';
import React from "react";
import {useLocation} from "react-router";
import {Link} from 'react-router-dom';
import {BREAD_CRUMBS} from '../../const';

const BreadCrumbs = () => {
  const location = useLocation().pathname;

  const getCrumbs = (path) => {
    let crumbs = [];
    while (path.length > 1) {
      const crumb = path.slice(path.lastIndexOf(`/`) + 1);
      crumbs.unshift({
        href: path,
        title: BREAD_CRUMBS[crumb],
      });
      path = path.slice(0, path.lastIndexOf(`/`));
    };
    crumbs.unshift({
      href: `/`,
      title: BREAD_CRUMBS.root,
    });

    return crumbs;
  };

  return (
    <ul className="bread-crumbs">
      {getCrumbs(location).map((item) => {
        return (item.href !== location ?
          <li className={`bread-crumbs__item`} key={`${item.title}`}>
            <Link className={`bread-crumbs__link`} to={item.href}>{`${item.title}`}</Link>
          </li>
          :
          <li className={`bread-crumbs__item`} key={`${item}`}>
            <a className={`bread-crumbs__link`}>{`${item.title}`}</a>
          </li>
        );
      })}
    </ul >
  )
};

export default BreadCrumbs;
