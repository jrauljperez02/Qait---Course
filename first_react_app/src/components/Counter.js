import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState("a");

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {setCount(count + "a")}}>Incrementar una unidad.</button>
            <button onClick={() => {setCount("")}}>Regresar cuenta a 0</button>
        </div>
    )
};

export default Counter;