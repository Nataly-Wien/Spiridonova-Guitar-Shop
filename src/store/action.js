export const ActionType = {
  SHOW_MODAL: `appearance/showModal`,
  HIDE_MODAL: `appearance/hideModal`,
  SET_MOBILE_MENU_OPEN: `appearance/setMobileMenuOpen`,
  SET_MODAL_FILTERS_OPEN: `appearance/setModalFiltersOpen`,

  LOAD_GOODS: `goods/loadGoods`,
  LOAD_GOOD_IMAGES: `goods/loadGoodImages`,
  ADD_TO_CART: `goods/addToCart`,
  DELETE_FROM_CART: `goods/deleteFromCart`,
  SET_GOOD_NUMBER: `goods/setGoodNumber`,
  SET_CART_TOTAL: `goods/setCartTotal,`
};

export const ActionCreator = {
  showModal: (payload) => ({
    type: ActionType.SHOW_MODAL,
    payload,
  }),

  hideModal: () => ({
    type: ActionType.HIDE_MODAL,
  }),

  setMobileMenuOpen: (payload) => ({
    type: ActionType.SET_MOBILE_MENU_OPEN,
    payload,
  }),

  setModalFiltersOpen: (payload) => ({
    type: ActionType.SET_MODAL_FILTERS_OPEN,
    payload,
  }),



  loadGoods: (payload) => ({
    type: ActionType.LOAD_GOODS,
    payload,
  }),

  loadGoodImages: (payload) => ({
    type: ActionType.LOAD_GOOD_IMAGES,
    payload,
  }),

  addToCart: (payload) => ({
    type: ActionType.ADD_TO_CART,
    payload,
  }),

  deleteFromCart: (payload) => ({
    type: ActionType.DELETE_FROM_CART,
    payload,
  }),

  setGoodNumber: (payload) => ({
    type: ActionType.SET_GOOD_NUMBER,
    payload,
  }),

  setCartTotal: (payload) => ({
    type: ActionType.SET_CART_TOTAL,
    payload,
  }),

};
