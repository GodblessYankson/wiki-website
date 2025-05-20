import React, { useState } from 'react'

const counter = () => {
    const [count, setCount] = useState(0)
    const [movies, setMovies] = useState({
        title: "DOOM",
        rating: 7,
        performance: 100
})
const handleClick = () => {
    setMovies({...movies, rating: 10, performance: 88})
}
  return (
    <div>
        <p>{movies.title}</p>
        <p>{movies.rating}</p>
        <p>{movies.performance}</p>
        <button onClick={handleClick} className='text-2xl text-red-500'>Click</button>
        counter = {count}
       
        </div>
  )
}

export default counter