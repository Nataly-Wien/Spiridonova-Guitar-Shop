export const ActionType = {
  SHOW_MODAL: `appearance/showModal`,
  HIDE_MODAL: `appearance/hideModal`,
  SET_MOBILE_MENU_OPEN: `appearance/setMobileMenuOpen`,
  SET_MODAL_FILTERS_OPEN: `appearance/setModalFiltersOpen`,

  LOAD_GOODS: `goods/loadGoods`,
  SET_FILTERED_LIST: `goods/setFilteredList`,
  ADD_TO_CART: `goods/addToCart`,
  DELETE_FROM_CART: `goods/deleteFromCart`,
  SET_GOOD_NUMBER: `goods/setGoodNumber`,
  SET_DISCOUNT: `goods/setDiscount`,
  SET_CURRENT_SORT: `goods/setCurrentSort`,
  SET_FILTERS: `goods/seFilters`,
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

  setFilteredList: (payload) => ({
    type: ActionType.SET_FILTERED_LIST,
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

  setDiscount: (payload) => ({
    type: ActionType.SET_DISCOUNT,
    payload,
  }),

  setCurrentSort: (payload) => ({
    type: ActionType.SET_CURRENT_SORT,
    payload,
  }),

  seFilters: (payload) => ({
    type: ActionType.SET_FILTERS,
    payload,
  }),
};
