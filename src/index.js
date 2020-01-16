import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import './style.scss'

import App from './components/App';
// import rootReducer from './reducers';

// //intialize store
// // const createStoreWithMiddleware = applyMiddleware()(createStore);
// // const store = createStoreWithMiddleware(rootReducer)
// const store = createStore(rootReducer);
// // console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('App')
  //   <Provider store={store}>
  //     <App />
  //   </Provider>, document.getElementById('App')
)
