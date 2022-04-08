import { useState } from 'react'



const Statistics = (props) => {
  return (
    <div>
      <h2>Statistics</h2>
    <p>Good: {props.good} </p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Average: {((props.bad*-1)+props.good)/(props.bad+props.neutral+props.good) } </p>
    <p>Positive: {props.good/(props.bad+props.neutral+props.good) *100} %</p>
    
    </div>
    

  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
     <button onClick={() => setGood(good + 1)}>
        Good
      </button>
    
      <button onClick={() => setNeutral(neutral+1)}> 
        Neutral
      </button>
     
      <button onClick={() => setBad(bad+1)}> 
        Bad
      </button>

      <Statistics good={good} bad={bad} neutral={neutral}/>

      
    </div>
  )
}

export default App