import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserChannel, UserContext } from '../../App'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(UserChannel)
    return (
        <>
            {/* <ComponentF />  Showing the component f */}
            <p>Another Way to use Context API</p>
            <p>User Context Value {user} and Channel Context value {channel}</p>

        </>
    )
}

export default ComponentE