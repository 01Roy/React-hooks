import axios from 'axios';
import React, { useState, useEffect } from 'react'

function Datafecthing() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState(1);
    console.log(id)

    const handleClick = () => {
        setIdFromButton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButton])
    return (
        <>
            <h3>Fectching Data from json placeholder</h3>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={handleClick}>Fetch</button>
            <p key={post.id}>{post.title}</p>
            {/* <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>
                )}
            </ul> */}
        </>
    )
}

export default Datafecthing