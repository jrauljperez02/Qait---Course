import '../../styles/Characters.css'
import Character from './Character';

import { useEffect, useState } from 'react';

//Big O
const Characters = () => {

    const [data, setData] = useState(null)
    const [httpError, setHttpError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //async await
    useEffect(() => {
        //GET
        const fetchCharacters = async() => {
            const response = await fetch('https://swapi.dev/api/people/')
            
            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            const responseJSON = await response.json()
            setData(responseJSON);
            setIsLoading(false);
        }


        try{
            fetchCharacters();
        } catch(error){
            setIsLoading(false);
            setHttpError(error.message);
        }

    },[])

    if(isLoading){
        return <section>
            <p>Cargando...</p>
        </section>
    }

    if(httpError){
        return <section>
            <p>{httpError}</p>
        </section>
    }

    return(
        <div>
            Este es un componente para pruebas con un JSON
            <ul className='characters_list'>
                {data.results.map(character => <Character key = {character.name} item ={character} />)}
            </ul>
        </div>
    )
};

export default Characters;