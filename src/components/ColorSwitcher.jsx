import { useState } from 'react'

function ColorSwitcher() {
  const [squares, setSquares ] = useState([
    {color: 'white', clicks: 0},
    {color: 'white', clicks: 0}

  ])

  const addSquare = () => {
    const square = {color: 'white', clicks: 0}
    setSquares(prev => [...prev, square])
  }

  const changeColor = (index) => {
    setSquares(prev => prev.map((item, i) => {
      if (i !== index){
          return {...item}
      }
      else if (item.color === 'white'){
        return {...item, color: 'black', clicks: item.clicks + 1}
      }
      else return {...item, color: 'white', clicks: item.clicks + 1}
        }
    ))
  }


  const remove = (index) => {
    setSquares(prev => prev.filter((_, i) =>
    i !== index
    ))
  }

  const resetClicks = () => {
      setSquares(prev =>
          prev.map(square =>
          ({...square, clicks: 0})
      )
    )
  }

  return (
      <div className = 'mega-container'>
        <button onClick = {resetClicks} className='button'>Reset Clicks</button>
        <button onClick = {addSquare} className='button'>Add square</button>

        {squares.map((square, index) =>
            <div className = 'container' key = {index}>
              <div
                  style={{backgroundColor: square.color}}
                  className='square'
                  onClick={() => changeColor(index)}
              >
              </div>
              <button onClick = {() => remove(index)}>Remove</button>
              <p>clicks: {square.clicks}</p>
            </div>
        )}
      </div>
  )
}

export default ColorSwitcher