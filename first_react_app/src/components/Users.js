import { useState, useEffect } from "react";
import { getData } from '../api/data'

import '../styles/Users.css'


const Users = () => {

    const [users, setUsers] = useState([])
    const [errorState, setErrorState] = useState({ hasError: false })

    useEffect(() => {

        // 1. render elements
        // 2. fetch API
        getData('https://qait-users-default-rtdb.firebaseio.com/users.json')
            .then(data => setUsers(data))
            .catch(error => setErrorState({ hasError: true}))

        
    },[]);

    //  operadores ternarios
    return(
        <div className="grid">
            
            {errorState.hasError ? <p>{errorState.message}</p> : null}
            {users === undefined ? null : 
                users.map(user => {
                    return (
                        <div key = {user.name} className = 'grid_item'>
                            <p>{user.name}</p>
                            <p>{user.age}</p>  
                        </div>    
                    )
                })}
        </div>
    )
}
export default Users;