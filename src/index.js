import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import promiseMW from 'redux-promise'
import rootReducers from './Reducers'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'jquery/dist/jquery'

let CreateStoreWithMiddleWare = applyMiddleware(promiseMW)(createStore)

ReactDOM.render(
  <Provider store={CreateStoreWithMiddleWare(rootReducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

