import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MounteUnmounted from "./hook/MounteUnmounted";
import Avatar from "./hook/Avatar";
// Fake comments
function  emitComment(id:any){
    setInterval(() =>{
        window.dispatchEvent(
            new  CustomEvent(`lesson-${id}`,{
                detail:`Nội dung comment của lesson ${id} `
            })
        )
    },2000)
}
emitComment(1)
emitComment(2)
emitComment(3)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <MounteUnmounted/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
