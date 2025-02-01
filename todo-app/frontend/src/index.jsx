import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import {createStore} from "redux";
import rootReducer from "./main/reducers";
import {Provider} from "react-redux";

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);