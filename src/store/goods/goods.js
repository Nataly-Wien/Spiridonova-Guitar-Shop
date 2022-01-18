import {ActionType} from '../action';

const initialState = {
  catalog: [],
  goodImages: {},
  isDataLoaded: false,
  isPicturesLoaded: false,
  cart: [],
  cartTotalSum: 0,
};

const goods = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_GOODS:
      return {
        ...state,
        catalog: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_GOOD_IMAGES:
      return {
        ...state,
        goodImages: action.payload,
        isPicturesLoaded: true,
      };
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ActionType.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.artNumber !== action.payload.artNumber),
      };
    case ActionType.SET_GOOD_NUMBER:
      return {
        ...state,
        cart: state.cart.map((item) => item.artNumber === action.payload.artNumber ? {...item, count: action.payload.count} : item),
      };
    case ActionType.SET_CART_TOTAL:
      return {
        ...state,
        cartTotalSum: action.payload,
      };

    default: return state;
  }
};

export {goods};
