import 'babel-polyfill';  //TODO: add only needed ones
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import urlReducer from './reducers/urlReducer';
import thunk from 'redux-thunk';
import { loadState, saveState } from './localStorage';

require('./styles/main.scss');

//Get state from localStorage (if present)
const persistedState = loadState();
const store = createStore(
  urlReducer,
  persistedState,
  applyMiddleware(thunk)
);

//Save state to localStorage
store.subscribe(() => {
  saveState(store.getState());
});

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
