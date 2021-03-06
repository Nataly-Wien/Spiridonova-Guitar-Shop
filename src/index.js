import './sass/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.querySelector(`#root`)
);
