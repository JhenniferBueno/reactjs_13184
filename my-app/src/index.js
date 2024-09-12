import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contador from './Contador';
//import ButtonEvent from './ButtonEvent'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Contador minimo = {0} maximo = {10}></Contador>
    </div>
)



reportWebVitals();