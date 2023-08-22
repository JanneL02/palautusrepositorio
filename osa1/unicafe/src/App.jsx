import { useState } from 'react'

const StatisticsLine = (props) =>
(<div>{props.text} {props.value} </div>)    

const Button = (props) =>
(<button onClick={props.handleClick}>{props.text}</button>)


const App = (props) => {
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
      return <div><StatisticsLine text={"good"} value={good} />
      <StatisticsLine text={"neutral"} value={neutral} />
      <StatisticsLine text={"bad"} value={bad} />
      <StatisticsLine text={"all"} value={good+neutral+bad} />
      <StatisticsLine text={"average"} value={(good-bad)/(good+neutral+bad)} />
      <StatisticsLine text={"positive"} value={(good)/(good+neutral+bad)} />
     </div>
     }
    
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="Neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      
      
      <h1>Statistics</h1>

      <div>
      <CheckIfFeedback/>
      </div>


    </div>
    
  )
}

export default App
