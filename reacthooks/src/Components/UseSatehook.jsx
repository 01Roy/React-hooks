import React from 'react'
import { useState } from 'react'

function UseSatehook() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h2>Use useState hook</h2>
            <h4>{count}</h4>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <button onClick={() => { setCount(count + -1) }}>Decrement</button>
        </>
    )
}

export default UseSatehook