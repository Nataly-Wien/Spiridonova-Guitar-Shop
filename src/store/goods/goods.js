import {ActionType} from '../action';

const initialState = {
  catalog: [],
  filteredList: [],
  sortRule: (a, b) => 0,
  isLowToHigh: true,
  cart: [],
  promoDiscount: {
    percent: 0,
    roubles: 0,
    promo: ``,
  },
  isDataLoaded: false,
  filters: {
    priceFrom: 0,
    priceTo: 0,
    type: undefined,
    strings: undefined,
  },
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_GOODS:
      return {
        ...state,
        catalog: [...action.payload],
        filteredList: [...action.payload],
        isDataLoaded: true,
      };
    case ActionType.SET_FILTERED_LIST:
      return {
        ...state,
        filteredList: [...action.payload],
      };
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.findIndex((item) => item.artNumber === action.payload.artNumber) > -1 ?
          state.cart.map((item) => item.artNumber === action.payload.artNumber ? {...item, count: item.count + 1} : item) :
          [...state.cart, {
            ...action.payload,
            count: 1,
          }],
      };
    case ActionType.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.artNumber !== action.payload.artNumber),
      };
    case ActionType.SET_GOOD_NUMBER:
      return {
        ...state,
        cart: state.cart.map((item) => item.artNumber === action.payload.good.artNumber ? {...item, count: action.payload.count} : item),
      };
    case ActionType.SET_CURRENT_SORT:
      return {
        ...state,
        sortRule: action.payload,
        filteredList: [...state.filteredList.sort(action.payload)],
      };
    case ActionType.SET_DISCOUNT:
      return {
        ...state,
        promoDiscount: action.payload,
      };
    case ActionType.SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    default: return state;
  }
};

export {goods};
