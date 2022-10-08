const Human = (props) => {

    console.log(props.description)
    return (
        <div style={{display: 'flex'}}>
            <p>{props.description.name}</p>
            <p>{props.description.city}</p>
        </div>
    )
}

export default Human;