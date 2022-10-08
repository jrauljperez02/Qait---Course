import Human from "./Human";

const Humans =  () => {

    const array_of_humans = [
        {
            name : 'Alberto',
            city: 'CDMX',
        },
        {
            name: 'Sofia',
            city: 'Guanajuato'
        },
        {
            name: 'Ana',
            city: 'Toluca'
        }
    ] 

    console.log(array_of_humans[0])

    return(
        <div>
            {array_of_humans.map(human => <Human description = {human} />)}
            {/* <Human description = {array_of_humans[0]}/>
            <Human description = {array_of_humans[1]}/> */}
        </div>
    )
}

export default Humans;