import { useState } from 'react'

function Drill3 () {
  const [items,setItems] = useState([
    {value:10, clicks:0},
    {value:20, clicks:0}
  ])

  const pressButton = (index) => {
    setItems(prev => prev.map((item, i) =>
      index === i ? {...item, clicks: item.clicks + 1, value: item.value + 1 } : item
    ))
  }

  const deactivate = () => {
    setItems(prev => prev.map((item, i) =>
        ({...item, clicks: 0})

    ))
  }

  return (
      <>
        <button onClick = {deactivate}>
          Deactivate all
        </button>
        {items.map((item, index) =>
            <div key = {index}>
              <button onClick = {() => pressButton(index)}>Button</button>
              <p>value: {item.value}</p>
              <p>clicks: {item.clicks}</p>
              <hr/>
            </div>
        )}
      </>
  )
}
export default Drill3