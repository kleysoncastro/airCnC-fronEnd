import React, {useEffect} from 'react'
import api from '../../servces'

/* 
 * useEffect é usaca como uma lista observavel 
 * sempre uma varias passadacnos [] sofre auteracao 
 * a funcao e execurtada
 * quando [] esta vazio so exec uma vez

*/


export default function Bashboard() {
    
    useEffect(()=>{

        async function loadSposts() {
            const user_id = localStorage.getItem('user')
            const response = await api.get('/dashboard', {

                headers: {user_id}
            
            });
            console.log(response.data)
        }

        loadSposts();
    }, [])
    
    return <h1>Dashboard</h1>
}