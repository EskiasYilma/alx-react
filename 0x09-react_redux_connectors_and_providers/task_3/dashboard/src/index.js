import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import uiReducer, { defaultCase } from "./reducers/uiReducer";
import { Map } from "immutable";
import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(uiReducer, Map(defaultCase), composer(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
