import React, { useEffect, useState } from 'react'

function IntervalhookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(() => {
        let interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    })                    //without adding dependece array to the effect hook it work fine
    return (
        <>
            {count}
        </>
    )
}

export default IntervalhookCounter