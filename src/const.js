export const CARDS_PER_PAGE = 9;
export const CART_GOODS_MAX = 99;

export const AppRoutes = {
  MAIN: '/',
  CATALOG: `/catalog`,
  CART: `/catalog/cart`,
  SHARP: `#`,
};

export const Pages = {
  MAIN: 'MAIN',
  NOT_MAIN: `NOT_MAIN`,
};

export const BREAD_CRUMBS = {
  root: `Главная`,
  catalog: `Каталог`,
  cart: `Оформляем`,
};

export const LogoTypes = {
  HEADER: `header`,
  FOOTER: `footer`,
};

export const MAIN_MENU_ITEMS = [
  {
    name: `Каталог`,
    link: AppRoutes.CATALOG,
  },
  {
    name: `Где купить?`,
    link: `#`,
  },
  {
    name: `О компании`,
    link: `#`,
  },
  {
    name: `Cервис-центры`,
    link: `#`,
  },
];

export const USER_NAV_ITEMS = [
  {
    name: `Магазины`,
    icon: `map`,
    link: `#`,
  },
  {
    name: `Поиск`,
    icon: `search`,
    link: `#`,
  },
  {
    name: `Корзина`,
    icon: `basket`,
    link: AppRoutes.CART,
  },
];

export const getUserNavIcon = (name) => {
  switch (name) {
    case `map`:
      return (<svg className="user-nav__icon user-nav__icon--map" width="14" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.875 7.352c0 4.455-6 8.273-6 8.273s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05a6.148 6.148 0 0 1 4.243-1.677c1.591 0 3.117.603 4.243 1.677a5.598 5.598 0 0 1 1.757 4.05Z" stroke="#000" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" /><path d="M6.875 9.262c1.105 0 2-.855 2-1.91 0-1.054-.895-1.909-2-1.909s-2 .855-2 1.91c0 1.054.895 1.909 2 1.909Z" stroke="#000" strokeWidth="1.333" strokeLinecap="round" strokeLinejoin="round" /></svg>);
    case `search`:
      return (<svg className="user-nav__icon" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m10.028 9.029 3.765 3.766a.706.706 0 0 1-.998.998l-3.766-3.766a5.6 5.6 0 1 1 .998-.998Zm-4.428.77a4.2 4.2 0 1 0 0-8.399 4.2 4.2 0 0 0 0 8.4Z" fill="#000" /></svg>);
    case `basket`:
      return (<svg className="user-nav__icon" width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.38 4.593a.518.518 0 0 0-.171-.152.436.436 0 0 0-.21-.055h-3V2.023c0-.47-.157-.921-.439-1.254C9.28.437 8.898.25 8.5.25h-3c-.398 0-.78.187-1.06.52-.282.332-.44.783-.44 1.253v2.363H1a.435.435 0 0 0-.21.052.516.516 0 0 0-.173.151.63.63 0 0 0-.103.223.695.695 0 0 0-.014.254l.94 7.18c.036.281.157.538.34.723a.912.912 0 0 0 .66.28h9.13a.913.913 0 0 0 .659-.28c.184-.185.305-.442.34-.724l.93-7.18a.695.695 0 0 0-.015-.251.627.627 0 0 0-.104-.22ZM5 2.023a.65.65 0 0 1 .146-.418.465.465 0 0 1 .354-.173h3c.132 0 .26.062.353.173A.65.65 0 0 1 9 2.023v2.363H5V2.023Zm6.57 10.045H2.43l-.845-6.5h10.83l-.845 6.5Z" fill="#000" /></svg>);
    default: return;
  }
};
export const CATALOG_MENU_ITEMS = [
  {
    name: `Акустические гитары`,
    link: `#`,
  },
  {
    name: `Классические гитары`,
    link: `#`,
  },
  {
    name: `Электрогитары`,
    link: `#`,
  },
  {
    name: `Бас-гитары`,
    link: `#`,
  },
  {
    name: `Укулеле`,
    link: `#`,
  },
];

export const FOOTER_INFO_ITEMS = [
  {
    name: `Где купить?`,
    link: `#`,
  },
  {
    name: `Блог`,
    link: `#`,
  },
  {
    name: `Вопрос - ответ`,
    link: `#`,
  },
  {
    name: `Возврат`,
    link: `#`,
  },
  {
    name: `Сервис-центры`,
    link: `#`,
  },
];

export const SOCIAL_DATA = [`facebook`, `instagram`, `twitter`];

export const getSocialIcon = (name) => {
  switch (name) {
    case `facebook`:
      return (<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.405 0 12.072 0 18.097 4.388 23.091 10.125 24v-8.437H7.077v-3.49h3.048v-2.66c0-3.028 1.792-4.698 4.532-4.698 1.313 0 2.688.235 2.688.235v2.97h-1.517c-1.488 0-1.953.931-1.953 1.886v2.264H17.2l-.531 3.49h-2.794v8.438C19.612 23.093 24 18.098 24 12.072 24 5.405 18.627 0 12 0Z" fill="#fff" /></svg>);
    case `instagram`:
      return (<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 24c-1.625 0-3.18-.316-4.664-.95-1.484-.632-2.762-1.484-3.832-2.554-1.07-1.07-1.922-2.348-2.555-3.832A11.773 11.773 0 0 1 0 12c0-1.625.316-3.18.95-4.664.632-1.484 1.484-2.762 2.554-3.832 1.07-1.07 2.348-1.922 3.832-2.555C8.82.316 10.375 0 12 0c1.625 0 3.18.316 4.664.95 1.484.632 2.762 1.484 3.832 2.554 1.07 1.07 1.922 2.348 2.555 3.832C23.684 8.82 24 10.375 24 12c0 1.625-.316 3.18-.95 4.664-.632 1.484-1.484 2.762-2.554 3.832-1.07 1.07-2.348 1.922-3.832 2.555C15.18 23.684 13.625 24 12 24Zm6-16.5a1.46 1.46 0 0 0-.434-1.055A1.43 1.43 0 0 0 16.5 6h-9c-.406 0-.758.148-1.055.445A1.442 1.442 0 0 0 6 7.5V9h2.672C9.578 8 10.687 7.5 12 7.5c1.313 0 2.422.5 3.328 1.5H18V7.5ZM9 12c0 .828.293 1.535.879 2.121A2.89 2.89 0 0 0 12 15a2.89 2.89 0 0 0 2.121-.879A2.89 2.89 0 0 0 15 12a2.89 2.89 0 0 0-.879-2.121A2.89 2.89 0 0 0 12 9a2.89 2.89 0 0 0-2.121.879A2.89 2.89 0 0 0 9 12Zm9-1.5h-1.781A4.38 4.38 0 0 1 16.5 12c0 1.25-.438 2.313-1.313 3.188-.874.874-1.937 1.312-3.187 1.312-1.25 0-2.313-.438-3.188-1.313C7.939 14.313 7.5 13.25 7.5 12c0-.484.094-.984.281-1.5H6v6c0 .422.145.777.434 1.066.289.29.644.434 1.066.434h9a1.45 1.45 0 0 0 1.066-.434c.29-.289.434-.644.434-1.066v-6Z" fill="#fff" /></svg>);
    case `twitter`:
      return (<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .48C5.639.48.48 5.638.48 12c0 6.363 5.158 11.52 11.52 11.52 6.363 0 11.52-5.157 11.52-11.52C23.52 5.639 18.363.48 12 .48Zm4.686 9.437c.005.099.006.197.006.293 0 3-2.28 6.457-6.454 6.457a6.403 6.403 0 0 1-3.478-1.02c.176.022.358.03.541.03a4.544 4.544 0 0 0 2.818-.97 2.274 2.274 0 0 1-2.12-1.575c.34.065.69.051 1.024-.04a2.27 2.27 0 0 1-1.82-2.224v-.028c.306.17.656.273 1.028.284a2.268 2.268 0 0 1-.702-3.03 6.451 6.451 0 0 0 4.677 2.372 2.269 2.269 0 0 1 3.866-2.07c.508-.1.995-.287 1.44-.551a2.28 2.28 0 0 1-.997 1.256 4.56 4.56 0 0 0 1.303-.359 4.602 4.602 0 0 1-1.132 1.175Z" fill="#fff" /></svg>);
    default: return;
  }
};

export const FILTER_TYPE_DATA = [
  {
    text: `Акустические гитары`,
    name: `acoustic`,
    strings: [6, 7, 12],
  },
  {
    text: `Электрогитары`,
    name: `electro`,
    strings: [4, 6, 7],
  },
  {
    text: `Укулеле`,
    name: `ukulele`,
    strings: [4],
  },
];

export const FILTER_STRINGS_DATA = [
  {
    value: 4,
    name: `four`,
  },
  {
    value: 6,
    name: `six`,
  },
  {
    value: 7,
    name: `seven`,
  },
  {
    value: 12,
    name: `twelve`,
  },
];

export const GUITAR_TYPE = {
  acoustic: `Акустическая гитара`,
  electro: `Электрогитара`,
  ukulele: `Укулеле`,
};

export const getMoneyFormat = (number) => number.toString().split(``).reverse().join(``).match(/\d{0,3}/g).join(` `).split(``).reverse().join(``).trim();
export const getNum = (string) => +string.replace(/[^0-9]/g, ``);
export const getNumString = (string) => string.replace(/[^0-9]/g, ``);
export const getCorrectValue = (value, min, max) => Math.min(Math.max(min, value), max);

export const getRatingStyle = (rating) => {
  return {width: `${Math.round(rating * 20)}%`};
};

export const PopupTypes = {
  CART_ADD: `CART_ADD`,
  CART_DELETE: `CART_DELETE`,
  CART_SUCCESS: `CART_SUCCESS`,
  PROMO_UNSUCCESS: `PROMO_UNSUCCESS`,
}

export const MODAL_POPUPS = {
  cartAdd: {
    title: `Добавить товар в корзину`,
    type: PopupTypes.CART_ADD,
    buttons: [
      {
        title: `Добавить в корзину`,
        type: `rusty`,
        action: `addToCart`,
      },
    ],
    link: `.cart-modal`,
  },
  cartDelete: {
    title: `Удалить этот товар? `,
    type: PopupTypes.CART_DELETE,
    buttons: [
      {
        title: `Удалить товар`,
        type: `rusty`,
        action: `deleteFromCart`,
      },
      {
        title: `Продолжить покупки`,
        type: `white`,
        action: `hideModal`,
      },
    ],
    link: `.cart-modal`,
  },
  success: {
    title: `Товар успешно добавлен в корзину`,
    buttons: [
      {
        title: `Перейти в корзину`,
        type: `rusty`,
        action: `/catalog/cart`,
      },
      {
        title: `Продолжить покупки`,
        type: `white`,
        action: `hideModal`,
      },
    ],
    link: `.message-modal`,
  },
  promoUnsuccess: {
    title: `Промокод не действителен`,
    buttons: [null,
      {
        title: `Вернуться в корзину`,
        type: `white`,
        action: `hideModal`,
      },
    ],
    link: `.message-modal`,
  },
};

export const PROMO_CODES = [
  {
    promo: `GITARAHIT`,
    percent: 0.1,
    roubles: 0,
  },
  {
    promo: `SUPERGITARA`,
    percent: 0,
    roubles: 700,
  },
  {
    promo: `GITARA2020`,
    percent: 0.3,
    roubles: 3000,
  },
];

export const Sorts = {
  NONE: `NONE`,
  PRICE: `PRICE`,
  POPULARITY: `POPULARITY`,
};
