import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Button count={count} setCount={setCount}/>
        {console.log("count",count)}
      </div>

    </>
  )
}
function Button(props){
  {console.log("props:", props)}
  return <button onClick={()=>{
          props.setCount(props.count)
  }}>{props.count}</button>
}
export default App
