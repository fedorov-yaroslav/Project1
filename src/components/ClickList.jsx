import { useState } from 'react'

function ClickList() {
  const [numbers, setNumbers ] = useState([1])

  const addNumber = () => {
    const lastNumber = numbers[numbers.length - 1]
    setNumbers([...numbers, lastNumber + 1])
  }

  const increase = (index) => {
    setNumbers(prev => prev.map((num, i) =>
    i === index ? num + 1 : num
    ))
  }
  return (
      <>
        <button onClick = {addNumber}>Add number</button>
        {numbers.map((number, index) =>
            <p key = {index}>{number}<button onClick = {() => increase(index)}>+1</button></p>
        )}
      </>
  )
}

export default ClickList