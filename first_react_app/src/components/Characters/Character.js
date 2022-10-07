//rface
const Character = (props) => {

    return (
        <div>
            <p>{props.item.name}</p>
            <p>{props.item.height} cm</p>
            <p>{props.item.skin_color}</p>
        </div>
    )
}

export default Character
