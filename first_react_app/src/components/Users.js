import { useState, useEffect } from "react";
import { getData } from '../api/data'

import '../styles/Users.css'


const Users = (props) => {

    console.log(props.users)    

    //  operadores ternarios
    return(
        <div className="grid">
            Users
            {/* {errorState.hasError ? <p>{errorState.message}</p> : null} */}
            {props.users === undefined ? null : 
                props.users.map(user => {
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