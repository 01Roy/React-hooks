import React from 'react'
import { UserContext, UserChannel } from '../../App'

function ComponentF() {
    return (
        <UserContext.Consumer>
            {user => {
                return (
                    <UserChannel.Consumer>
                        {channel => {
                            return (
                                <div>User Context value : {user} and User Chanel value :{channel}</div>
                            )
                        }}
                    </UserChannel.Consumer>
                )
            }}
        </UserContext.Consumer>
    )
}

export default ComponentF