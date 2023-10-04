import React, { useState } from 'react'
import useInput2 from './useInput2'


function UseInput() {
    const [firstName, bindFirstName, resetFirstName] = useInput2('')
    const [lastName, bindLastName, resetLastName] = useInput2('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        {...bindFirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        {...bindLastName}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UseInput