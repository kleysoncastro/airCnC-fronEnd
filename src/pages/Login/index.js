import React, {useState} from 'react'
import api from '../../servces'


/* 
    * as funcoes da DOM sao recuperadas como parametro das funcoes
    * history é um  parametro usado para navegacao nas paginas
*/

export default function Login({history}) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
   
       // anula evendo dadrao do usuario
       event.preventDefault();
    
       const response = await api.post('/sessions', {email})
   
       const {_id} = response.data;
   
       // salva no browser
       localStorage.setItem('user', _id);

       history.push('/dashboard')
    
     }// fim handleSubmit


    return (
    <>
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
        </>
    )

}