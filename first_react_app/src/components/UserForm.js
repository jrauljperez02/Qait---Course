import { useState } from "react";

const UserForm = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const handleSubmit = () => {
        fetch('https://qait-users-default-rtdb.firebaseio.com/new_users.json', 
            {
                method: 'POST',
                body: JSON.stringify(
                        {user: {
                            name,
                            age,
                        }})})}

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

        </form>
    )
}
export default UserForm;