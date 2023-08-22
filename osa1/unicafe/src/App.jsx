import { useState } from 'react'

const Statistics = (props) =>
(<div>{props.text} {props.value} </div>)    



const App = (props) => {
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

  const CheckIfFeedback = () =>{
    if(good==0 && bad==0 && neutral==0){
      return <div>No feedback given</div>
     }
     else{
      return <div><Statistics text={"good"} value={good} />
      <Statistics text={"neutral"} value={neutral} />
      <Statistics text={"bad"} value={bad} />
      <Statistics text={"all"} value={good+neutral+bad} />
      <Statistics text={"average"} value={(good-bad)/(good+neutral+bad)} />
      <Statistics text={"positive"} value={(good)/(good+neutral+bad)} />
     </div>
     }
    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button> 
      <button onClick={handleNeutralClick}>neutral</button> 
      <button onClick={handleBadClick}>bad</button>
      
      <h1>Statistics</h1>

      <div>
      <CheckIfFeedback/>
      </div>


    </div>
    
  )
}

export default App
