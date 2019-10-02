import React, {useState} from 'react';
import api from './servces'
import './App.css';
import logo from './assets/logo.svg'
import Routes from './routes'

function App() {

  const [email, setEmail] = useState('');

 async function handleSubmit(event) {

    // anula evendo dadrao do usuario
    event.preventDefault();
 
    const response = await api.post('/sessions', {email})

    const {_id} = response.data;

    // salva no browser
    localStorage.setItem('user', _id);
 
  }// fim handleSubmit


  return (
   
   <div className="conteiner">

     <img src={logo} alt="aircnc"/>
     <div className="content">
       <Routes />
       <p>
         Ofereça <strong>Sptos</strong> para programadores e contrate <strong>talentos</strong> para sua empresa
       </p>
    <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email *</label>
    <input 
          type="email" 
          id="email" 
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
          />
          <button className="btn" type="submit">Entrar</button>
    </form>

     </div>

   </div>
  );
}

export default App;
