import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFectchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                console.log(res.data)
                setPost(res.data)
                setLoading(false)
                setError('')

            })
            .catch((err) => {
                setError("Something went wrong!")
            })
    }, [])


    return (
        <>DataFectchingOne
            {loading ? 'Loading' : <h2>{post.title}</h2>}
            {error ? <div>{error}</div> : ""}
        </>
    )
}

export default DataFectchingOne