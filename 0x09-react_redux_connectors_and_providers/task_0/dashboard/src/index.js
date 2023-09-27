import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
