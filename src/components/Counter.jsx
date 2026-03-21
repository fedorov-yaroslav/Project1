import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
      <>
        <p>{count}</p>
        <button onClick = {() => setCount(prev => prev + 1)}>Plus 1</button>
        <button onClick = {() => setCount(prev => prev - 1)}>Minus 1</button>
      </>
  )
}

export default Counter