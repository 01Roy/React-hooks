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

function COuntIne() {
    const [count, dispatch] = useReducer(reducer, initaState)
    return (
        <> <h2>the count - {count}</h2>
            <button onClick={() => { dispatch("increment") }}>Increment</button>
            <button onClick={() => { dispatch("decrement") }}>Decrement</button>
            <button onClick={() => { dispatch("reset") }}>Reset</button>
        </>
    )
}

export default COuntIne