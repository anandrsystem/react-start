import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//intialize store
import rootReducer from './reducers';
const store = createStore(rootReducer, {});
console.log(store.getState());

import App from './components/App';
import './style.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
