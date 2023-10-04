import React, { useEffect, useState } from 'react'

function HookCounterOne() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log("Updating the document")
    document.title = `You Clicked ${count} Times`
  }, [count])
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </>
  )
}

export default HookCounterOne