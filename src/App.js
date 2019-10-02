import React from 'react';
import api from './servces'
import './App.css';
import logo from './assets/logo.svg'

function App() {
  return (
   
   <div className="conteiner">

     <img src={logo} alt="aircnc"/>
     <div className="content">
       <p>
         Ofereça <strong>Sptos</strong> para programadores e contrate <strong>talentos</strong> para sua empresa
       </p>
    <form >
    <label htmlFor="email">Email *</label>
    <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor e-mail" />
          <button className="btn" type="submit">Entrar</button>
    </form>

     </div>

   </div>
  );
}

export default App;
