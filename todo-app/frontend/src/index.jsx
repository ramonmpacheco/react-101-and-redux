import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./main/reducers";
import {Provider} from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);