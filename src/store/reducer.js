import {combineReducers} from 'redux';
import {appearance} from './appearance/appearance';
import {goods} from './goods/goods';

export const NameSpace = {
  APPEARANCE: `APPEARANCE`,
  GOODS: `GOODS`,
};

export default combineReducers({
  [NameSpace.APPEARANCE]: appearance,
  [NameSpace.GOODS]: goods,
});
