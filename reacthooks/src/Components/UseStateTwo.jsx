import React, { useState } from 'react'

function UseStateTwo() {
    let intaialVal = 0;
    const [count, setCount] = useState(intaialVal)
    const incremenetByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prev => prev + 1)
        }
    }
    return (
        <>
            <h2>Use UseSate using prev</h2>
            Count : {count}
            <button onClick={() => setCount(intaialVal)}>Reset</button>
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={() => setCount(prev => prev - 1)}>Increment</button>
            <button onClick={incremenetByFive}>Increment 5</button>
        </>
    )
}

export default UseStateTwo