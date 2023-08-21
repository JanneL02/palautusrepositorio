import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

 

const handleGoodClick = () =>{
const newGood = good + 1
console.log("this is good", good)
console.log("this is bad", bad)
setGood(newGood)
}

const handleBadClick = () =>{
  const newBad = bad + 1
  console.log("this is good", good)
  console.log("this is bad", bad)
  setBad(newBad)
  }

  const handleNeutralClick = () =>{
    const newNeutral = neutral + 1
    console.log("this is good", good)
    console.log("this is bad", bad)
    setNeutral(newNeutral)
    }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button> 
      <button onClick={handleNeutralClick}>neutral</button> 
      <button onClick={handleBadClick}>bad</button>
      
      <h1>Statistics</h1>
     <div>good {good} </div> 
     <div> neutral {neutral}</div>
     <div> bad {bad}</div>
    </div>
    
  )
}

export default App
