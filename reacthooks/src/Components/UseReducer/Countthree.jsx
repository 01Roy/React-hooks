import React, { useReducer } from 'react'

let initaState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment": return state + 1;
        case "decrement": return state - 1;
        case "reset": return initaState;
        default: return state
    }
}

function Countthree() {
    const [count, dispatch] = useReducer(reducer, initaState)
    const [countTwo, dispatch2] = useReducer(reducer, initaState)
    return (
        <> <h2>using Multiple useReducer</h2>
            <h2>the count - {count}</h2>
            <button onClick={() => { dispatch("increment") }}>Increment</button>
            <button onClick={() => { dispatch("decrement") }}>Decrement</button>
            <button onClick={() => { dispatch("reset") }}>Reset</button>
            <h2>the count Two - {countTwo}</h2>
            <button onClick={() => { dispatch2("increment") }}>Increment</button>
            <button onClick={() => { dispatch2("decrement") }}>Decrement</button>
            <button onClick={() => { dispatch2("reset") }}>Reset</button>
        </>
    )
}

export default Countthree