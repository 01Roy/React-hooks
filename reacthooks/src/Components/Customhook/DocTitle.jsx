import React, { useState, useEffect } from 'react'
import useDocTitle from './useDocTitle';

function DocTitle() {
    const [count, setCount] = useState(0);

    // this hte coustom hook 
    useDocTitle(count)

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Click - {count}</button>
        </div>
    )
}

export default DocTitle