import React, {useState} from 'react'
import camera from '../../assets/camera.svg'
import './style.css'

export default function New() {

    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
   
   function handleSubmit() {

   }
   
    return (

        <form onSubmit={handleSubmit}>

        <label id="thumbnail">
            <input type="file" />
            <img src={camera} alt="slect image"/>

        </label>



            <label htmlFor="company">Empresa *</label>
            <input 
            
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)} 
            />

            <label htmlFor="techs">Tecnologias *<span>(separadas por vigula)</span></label>
            <input 
            
                id="techs"
                placeholder="Quais tecnologias usam?"
                value={techs}
                onChange={event => setTechs(event.target.value)} 
            />

            <label htmlFor="techs">Valor da diaria *<span>(Em branco para gratuito)</span></label>
            <input 
            
                id="techs"
                placeholder="Valor cobrado por dia"
                value={price}
                onChange={event => setPrice(event.target.value)} 
            />

        <button type="submit" className="btn">cadastrar</button>

        </form>


    )// fim return 
}