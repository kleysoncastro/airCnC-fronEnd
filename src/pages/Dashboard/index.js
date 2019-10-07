import React, {useEffect, useState, useMemo} from 'react'
import {Link} from 'react-router-dom'
import socketiocli from 'socket.io-client'
import api from '../../servces'
import './style.css'
import { request } from 'https'


/* 
 * useEffect é usaca como uma lista observavel 
 * sempre uma varias passadacnos [] sofre auteracao 
 * a funcao e execurtada
 * quando [] esta vazio so exec uma vez

*/


export default function Bashboard() {

const [requests, setRequests] = useState([]);

// useMema, memorisa uma variavel, quando ela muda ele exec funcao interna
const user_id = localStorage.getItem('user')

const socket = useMemo(() => socketiocli('http://192.168.0.9:3333', {
    query: {user_id}
}), [user_id])// so fará uma nova conexao se o id mudar

    useEffect(()=>{

        socket.on('booking_request', data => {
            
            setRequests([...requests, data])
        })

    },[requests, socket]);


    
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

   async function handleAccetpt(id) {

        await api.post(`/bookings/${id}/approvals`)

        setRequests(requests.filter(request => request._id !== id))

    }

    async function handleReject(id) {

        await api.post(`/bookings/${id}/rejections`)

        setRequests(requests.filter(request => request._id !== id))

    }
    
    return (
    
    <>

    <ul className="notifications">
        
        {requests.map(request => (

            <li key={request._id}>
                <p>
                <strong>{request.user.email}</strong> esta solicitando uma reserva 
                em <strong>{request.spot.company}</strong> para a 
                data <strong>{request.date}</strong>
                </p>
                <button className="accept" onClick={() => handleAccetpt(request._id)} >Aceitar</button>
                <button className="reject" onClick={()=> handleReject(request._id)} >Rejeitar</button>
            </li>

        ))}
        
        
        </ul>    

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