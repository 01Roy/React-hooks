import React, { useState } from 'react'

function UseSatethree() {
    const [name, setName] = useState({ firstName: "", lastName: "" })
    return (
        <>
            <h2>Use useState hook in Objects</h2>
            <input
                type="text"
                value={name.firstName}
                onChange={(e) => setName({
                    ...name, //use old values in object state
                    firstName: e.target.value
                })}
            />
            <input
                type="text"
                value={name.lastName}
                onChange={(e) => setName({
                    ...name,
                    lastName: e.target.value
                })}
            />

            <h2>Your first name is : {name.firstName}</h2>
            <h2>Your last name is : {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>

        </>
    )
}

export default UseSatethree