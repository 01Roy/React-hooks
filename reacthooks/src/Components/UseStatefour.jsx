import React, { useState } from 'react'

function UseStatefour() {
    const [items, setItems] = useState([])

    const addItem = () => {
        setItems( // replacing the array
            [...items, //adding all old values
            { // this will create a new value in array
                id: items.length,
                value: Math.floor(Math.random() * 10 + 1)
            }]
        )
    }
    return (
        <>
            <h2>Updateing State in Array</h2>
            <button onClick={addItem}>Add a Number</button>
            <ul>
                {items.map(item => (<li>{item.value}</li>))}
            </ul>

        </>
    )
}

export default UseStatefour