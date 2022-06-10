import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Random from "./hook/Random";
import TwoWayBinding from "./hook/Two-wayBinding";
import Todolist from "./hook/Todolist";
import MounteUnmounted from "./hook/MounteUnmounted";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// @ts-ignore
root.render(
  <React.StrictMode>
      <MounteUnmounted/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
