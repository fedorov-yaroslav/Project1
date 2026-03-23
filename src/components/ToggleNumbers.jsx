import { useState } from 'react'

function ToggleNumbers() {
  const [numbers, setNumbers ] = useState([1, 2, 3])

  const toggle = (index) => {
    setNumbers(prev => prev.map((num, i) =>
      index === i ? num * -1 : num
    ))
  }

  return (
      <>
        {numbers.map((number, index) =>
            <div  key = {index}>
              <p>{number}</p>
              <button onClick = {() => toggle(index)}>Toggle</button>
            </div>
        )}
      </>
  )
}

export default ToggleNumbers
