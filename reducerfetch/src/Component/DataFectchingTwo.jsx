import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

let initialState = {
    loading: true,
    error: "",
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case "FETCH_SUCESS":
            return {
                loading: false,
                error: "",
                post: action.playload
            }
        case 'FECTCH_ERROR':
            return {
                loading: false,
                post: {},
                error: " Someting went Wrong"
            }
    }
}

function DataFectchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                dispatch({ type: "FETCH_SUCESS", playload: res.data })

            })
            .catch((err) => {
                dispatch({ type: "FECTCH_ERROR" })
            })
    }, [])

    return (
        <>DataFectchingTwo
            {state.loading ? 'Loading' : <h2>{state.post.title}</h2>}
            {state.error ? <div>{state.error}</div> : ""}
        </>
    )
}

export default DataFectchingTwo