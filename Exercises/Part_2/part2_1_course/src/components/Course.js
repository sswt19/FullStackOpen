import React from "react";

const Total = (props) => {
    return (
      <div>
        <h4>Total of {props.totalExercises} exercises</h4>
      </div>
    );
  };
  
  const Part = (props) => {
    return (
      <div>
        <p>
          {props.name} {props.exercise}
        </p>
      </div>
    );
  };
  
  const Content = (props) => {
    const { parts } = props;
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercise={part.exercises} />
        ))}
        <Total
          totalExercises={parts
            .map((part) => part.exercises)
            .reduce((x, y) => x + y, 0)}
        />
      </div>
    );
  };
  
  const Header = (props) => {
    const course = props.course;
    return (
      <div>
        <h1>{course}</h1>
      </div>
    );
  };
  
  const Course = (props) => {
    const { course } = props;
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
      </div>
    );
  };

export default Course 



