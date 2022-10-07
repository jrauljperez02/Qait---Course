// Nombre
// Numero de poliza
// Email
// Fecha de nacimiento
import { useState } from "react";

const UserForm = () => {

    const [name, setName] = useState('');
    const [num_poliza, setNumPoliza] = useState('');
    const [email, setEmail] = useState('');
    const [birth_date, setBirthDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name,
            num_poliza,
            email,
            birth_date,
        }

        console.log(data);
    }

    return(
        <form>
            <label>Ingrese su nombre: </label>
            <input 
                onChange={(event) => setName(event.target.value)}
            /><br/>
            <label>Ingrese su numero de poliza: </label>
            <input 
                onChange={(event) => setNumPoliza(event.target.value)}
            /><br/>
            <label>Ingrese su email: </label>
            <input 
                onChange={(event) => setEmail(event.target.value)}
            /><br/>
            <label>Ingrese su fecha de nacimiento: </label>
            <input
                onChange={(event) => setBirthDate(event.target.value)}
            /><br/>
            <button onClick={handleSubmit}>Enviar datos</button>
        </form>
    )
}

export default UserForm;