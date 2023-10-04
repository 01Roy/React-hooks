import React, { useMemo, useState } from 'react'

function CounterOne() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    // using useMeo hook

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++
        return countOne % 2 == 0
    }, [countOne])
    return (
        <div>Using UseMemo hook
            <div>
                <button onClick={() => setCountOne(countOne + 1)}>CountOne countTwo - {countOne}</button>
                <span>{isEven ? "Even" : "Odd"}</span>
            </div>
            <div>
                <button onClick={() => setCountTwo(countTwo + 1)}>CountOne countTwo - {countTwo}</button>

            </div>
        </div>
    )
}

export default CounterOne