import React, { useState } from 'react'

const Button = (props) => {
  const { onClick, text } = props
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}
const Stats = (props) => {
  const { text, data } = props
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{data}</td>
      </tr>
    </>
  )
}
const Statistics = (props) => {
  const { good, bad, neutral } = props
  const total = good + bad + neutral
  if (total === 0)
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  return (
    <table>
      <tbody>
        <Stats text="good" data={good} />
        <Stats text="neutral" data={neutral} />
        <Stats text="bad" data={bad} />
        <Stats text="all" data={total} />
        <Stats text="average" data={(good - bad) / total} />
        <Stats text="positive" data={(good / total) * 100} />
      </tbody>
    </table>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)
  return (
    <div>
      <h1>Your Feedback</h1>
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App