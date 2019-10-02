import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import api from '../../servces'
import './style.css'

/* 
 * useEffect é usaca como uma lista observavel 
 * sempre uma varias passadacnos [] sofre auteracao 
 * a funcao e execurtada
 * quando [] esta vazio so exec uma vez

*/


export default function Bashboard() {
    
    const [spots, setSpots] = useState([])
    /* 
        * useStade 
        * parametros em [spots, setSpots] spots a ser obserado
        * setSpots para modificar a variavel
    */
    

    useEffect(()=>{

        async function loadSposts() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {

                headers: {user_id}
            
            });
          
            setSpots(response.data)
        }

        loadSposts();
    }, [])
    
    return (
    
    <>
        <ul className="spot-list">

            {spots.map(spot => ( 
                    <li key={spot._id}>
                        <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia`: 'GRATUITO'}</span>
                    </li>
            ))}
        </ul>

        <Link to="/new">
            <button className="btn">Cadastrar novo spot</button>
        </Link>
    </>
    )// fim return
}