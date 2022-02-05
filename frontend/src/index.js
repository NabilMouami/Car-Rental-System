import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import carReducer from '../src/redux/carSlice'
import userReducer from '../src/redux/useractions'
const store = configureStore({
  reducer: {
    car: carReducer,
    userinfo: userReducer,
  }
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
