import { useState } from "react";

const UserForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const [showForm, setShowForm] = useState(true);

    const handleSubmit = () => {
        fetch('https://qait-users-default-rtdb.firebaseio.com/new_users.json', 
            {
                method: 'POST',
                body: JSON.stringify(
                        {user: {
                            name,
                            age,
                        }})})}

    // if(showForm){
    //     return <li>Hello</li>
    // }
    const hideForm = () => {
        setShowForm(false)
    }

    if(name.length > 5){
        return(
            <p>Nombre valido</p>
        )
    }

    if(showForm){
        return (
            <form>
                <label>Ingrese su nombre: </label>
                <input
                    onChange={event => setName(event.target.value)}
                /><br/>
                <label>Ingrese su edad: </label>
                <input 
                    onChange={event => setAge(event.target.value)}
                /><br/>
                <button onClick={handleSubmit}>Enviar los datos</button>
    
                <button onClick={() => setShowForm(false)}>Ocultar formulario</button>
            </form>
        )
    }

    if(!showForm){
        return(
            <button onClick={() => setShowForm(true)}>Mostrar formulario</button>
        )
    }
   
}
export default UserForm;