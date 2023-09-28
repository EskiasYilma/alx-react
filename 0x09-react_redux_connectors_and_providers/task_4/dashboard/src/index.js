import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import uiReducer, { defaultCase } from "./reducers/uiReducer";
import { Map } from "immutable";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { rootReducer, defaultRoot } from './reducers/rootReducer';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(rootReducer), defaultRoot, composer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
