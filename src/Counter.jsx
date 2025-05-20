import React, { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        counter = {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
  )
}

export default counter