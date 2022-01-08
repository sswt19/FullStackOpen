import React from 'react'

const Header = (props) => {
  const course = props.course
  return (<div>
    <h1>{course}</h1>
  </div>)
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.exercises[0]} />
      <Part part={props.parts[1]} exercise={props.exercises[1]} />
      <Part part={props.parts[2]} exercise={props.exercises[2]} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>)
}
const Part = (props) => {
  return (<div>
    <p>
      {props.part} {props.exercise}
    </p>
  </div>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts.map(part=> part.name)} exercises={course.parts.map(part=> part.exercises)}/>
      <Total totalExercises={course.parts.map(part=> part.exercises).reduce((x,y)=>x+y,0)} />
    </div>
  )
}

export default App