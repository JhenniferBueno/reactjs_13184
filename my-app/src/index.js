import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const nome = "Lista de Tarefas"


function tick() {
  const element = (
    <div>
       <h3>Hora agora: {new Date().toLocaleTimeString()}</h3>
      <h1> {nome}</h1>
      <ul>
       <li><i>Retirar o lixo</i></li> 
       <li><i>Levar as crianças ao médico</i></li> 
       <li><i>reunião as 14:30</i></li> 
       <li><i>Pagar contas</i></li> 
       <li><i>Levar o carro para revisão</i></li> 

      </ul>
     
    </div>
  );

  root.render(element)
}

setInterval(tick, 1000);






// root.render(
//   <React.StrictMode>
//     <Opa />
//     <App />   
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();