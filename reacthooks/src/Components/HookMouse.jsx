import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0)

    const logMouseEvent = e => {
        console.log(`mouse event`)
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log(`calling useEffect`)
        window.addEventListener('mousemove', logMouseEvent)

        // using Cleanup function
        return () => {
            console.log(`Component Unmount`)
            window.removeEventListener('mousemove', logMouseEvent)
        }
    }, []) // calling useEffect once
    return (
        <>
            X- {x} Y- {y}
        </>
    )
}

export default HookMouse