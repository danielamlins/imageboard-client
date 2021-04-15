import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';

import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

//https://www.digitalocean.com/community/tutorials/redux-redux-thunk#:~:text=Redux%20Thunk%20is%20a%20middleware,asynchronous%20operations%20have%20been%20completed.

// By default, Redux’s actions are dispatched synchronously, which is a problem for any non-trivial app that needs to communicate with an external API or perform side effects. Redux also allows for middleware that sits between an action being dispatched and the action reaching the reducers.

// Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store’s dispatch method, which is then used to dispatch regular synchronous actions inside the function’s body once the asynchronous operations have been completed.

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
