import { useState } from 'react'

function ColorSwitcher() {
  const [squares, setSquares ] = useState([
    {color: 'white'},
    {color: 'white'}

  ])

  const addSquare = () => {
    const square = {color: 'white'}
    setSquares(prev => [...prev, square])
  }

  const changeColor = (index) => {
    setSquares(prev => prev.map((item, i) => {
      if (i !== index){
        return item
      }
      else if (item.color === 'white'){
        return {...item, color: 'black'}
      }
      else return item
        }
    ))
  }


  const remove = (index) => {
    setSquares(prev => prev.filter((_, i) =>
    i !== index
    ))
  }

  return (
      <div className = 'mega-container'>
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
            </div>
        )}
      </div>
  )
}

export default ColorSwitcher