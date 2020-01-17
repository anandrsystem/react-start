import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './style.scss';

import App from './components/App';
import rootReducer from './reducers';

//intialize store
const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
